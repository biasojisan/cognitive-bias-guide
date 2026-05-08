import { db } from '$lib/server/db';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import markdownit from 'markdown-it';
import rubyPlugin from 'markdown-it-ruby';
import {
	CORE,
	CORE_INFO,
	GRAVITY,
	GRAVITY_INFO,
	TARGET,
	TARGET_INFO,
	type CoreWithColor,
	type GravityWithColor,
	type TargetWithColor
} from '$lib/constants/tg-model-metadata';
import { EVALUATION_LIST } from '$lib/constants/chart-metadata';
import { getRenderedBigFour } from '$lib/server/services/bias';

export const load = (async ({ params }) => {
	const md = markdownit().use(rubyPlugin);

	// バイアスID取得
	const id = Number(params.id);
	if (isNaN(id)) {
		throw error(400, 'Invalid bias ID');
	}

	// バイアスレコードを取得
	const bias = await db.query.biases.findFirst({
		where: (biases, { eq }) => eq(biases.id, id),
		with: {
			codex: {
				with: {
					codex: true
				}
			},
			taskBase: true,
			flavor: true,
			biasTheories: {
				with: {
					theory: true
				}
			},
			biasMethods: {
				with: {
					method: true
				}
			},
			biasSituations: {
				orderBy: (biasSituation, { asc }) => asc(biasSituation.sortOrder),
				with: {
					situation: true
				}
			},
			biasSocialDynamics: {
				with: {
					socialDynamic: true
				}
			},
			biasUsages: {
				orderBy: (biasUsage, { asc }) => asc(biasUsage.sortOrder),
				with: {
					situation: true
				}
			},
			biasTgModels: {
				with: {
					biase: true
				}
			},
			timelines: {
				orderBy: (timelines, { asc }) => asc(timelines.sortOrder),
				with: {
					biase: true
				}
			}
		}
	});

	// バイアスレコード取得失敗
	if (!bias) {
		throw error(404, 'Bias not found');
	}

	const [codexParents, tasks, flavors, bigFour] = await Promise.all([
        (await db.query.codex.findMany({ where: (codex, { isNull }) => isNull(codex.parentId) })).map((item) => {
            return {
                id: item.id,
                nameJa: md.render(item.nameJa ?? ''),
            }
        }),
        (await db.query.taskBase.findMany()).map((item) => {
            return {
                id: item.id,
                nameJa: md.render(item.nameJa ?? ''),
            }
        }),
        (await db.query.flavors.findMany()).map((item) => {
            return {
                id: item.id,
                nameJa: md.render(item.nameJa ?? ''),
            }
        }),
		(await getRenderedBigFour())
	]);

	const biasTgModelTargets = bias.biasTgModels.filter((item) => item.group === TARGET);

	const tgModelTargets: Record<string, TargetWithColor> = Object.entries(TARGET_INFO).reduce(
		(acc, [key, info]) => {
			// biasTgModelTargetsから該当するカテゴリーを探す
			const target = biasTgModelTargets.find((t) => t.category === key);

			// colorの判定ロジック
			let color: TargetWithColor['color'] = 'gray';
			if (target?.level === 1) color = 'primary';
			if (target?.level === 2) color = 'secondary';

			acc[key] = {
				 ...info,
				 nameJp: md.render(info.nameJp),
				 label: md.render(info.label),
				 summary: md.render(info.summary), 
				 color 
			};
			return acc;
		},
		{} as Record<string, TargetWithColor>
	);

	const biasTgModelGravities = bias.biasTgModels.filter((item) => item.group === GRAVITY);

	const tgModelGravities: Record<string, GravityWithColor> = Object.entries(GRAVITY_INFO).reduce(
		(acc, [key, info]) => {
			// biasTgModelGravitiesから該当するカテゴリーを探す
			const gravity = biasTgModelGravities.find((t) => t.category === key);

			// colorの判定ロジック
			let color: GravityWithColor['color'] = 'gray';
			if (gravity?.level === 1) color = 'primary';
			if (gravity?.level === 2) color = 'secondary';

			acc[key] = {
				 ...info,
				 nameJp: md.render(info.nameJp),
				 label: md.render(info.label),
				 summary: md.render(info.summary), 
				 color 
			};
			return acc;
		},
		{} as Record<string, GravityWithColor>
	);

	const biasTgModelCores = bias.biasTgModels.filter((item) => item.group === CORE);

	const tgModelCores: Record<string, CoreWithColor> = Object.entries(CORE_INFO).reduce(
		(acc, [key, info]) => {
			// biasTgModelCoresから該当するカテゴリーを探す
			const core = biasTgModelCores.find((t) => t.category === key);

			// colorの判定ロジック
			let color: CoreWithColor['color'] = 'gray';
			if (core?.level === 1) color = 'primary';
			if (core?.level === 2) color = 'secondary';

			acc[key] = {
				 ...info,
				 nameJp: md.render(info.nameJp),
				 label: md.render(info.label),
				 summary: md.render(info.summary), 
				 color 
			};
			return acc;
		},
		{} as Record<string, CoreWithColor>
	);

	const timelines = bias.timelines.map((item) => {
		return {
			title: md.render(item.title ?? ''),
			dateText: md.render(item.dateText ?? ''),
			category: md.render(item.category ?? ''),
			contents: md.render(item.contents ?? ''),
			url: item.url ?? '',
			badges: (md.render(item.badges ?? '').split(/[,，]/) || []).filter((v) => v.trim() !== '')
		};
	});

	return {
		bias: {
			...bias,
            slogan: md.render(bias.slogan ?? ''),
            nameJa: md.render(bias.nameJa ?? ''),
            summary: md.render(bias.summary ?? ''),
            measure: md.render(bias.measure ?? ''),
			definition: md.render(bias.definition || ''),
            structureTargetTitle: md.render(bias.structureTargetTitle || ''),
			structureTargetDescription: md.render(bias.structureTargetDescription || ''),
            structureTriggerTitle: md.render(bias.structureTriggerTitle || ''),
			structureTriggerDescription: md.render(bias.structureTriggerDescription || ''),
			structureKindTitle: md.render(bias.structureKindTitle || ''),
            structureKindDescription: md.render(bias.structureKindDescription || ''),
            processPerceptionTitle: md.render(bias.processPerceptionTitle || ''),
			processPerceptionDescription: md.render(bias.processPerceptionDescription || ''),
			processMatchingTitle: md.render(bias.processMatchingTitle || ''),
			processMatchingDescription: md.render(bias.processMatchingDescription || ''),
            processJudgmentTitle: md.render(bias.processJudgmentTitle || ''),
			processJudgmentDescription: md.render(bias.processJudgmentDescription || ''),
            processResponseTitle: md.render(bias.processResponseTitle || ''),
			processResponseDescription: md.render(bias.processResponseDescription || ''),
			predictivePredictionTitle: md.render(bias.predictivePredictionTitle || ''),
			predictivePredictionDescription: md.render(bias.predictivePredictionDescription || ''),
			predictiveAccuracyTitle: md.render(bias.predictiveAccuracyTitle || ''),
			predictiveAccuracyDescription: md.render(bias.predictiveAccuracyDescription || ''),
			predictiveCostTitle: md.render(bias.predictiveCostTitle || ''),
			predictiveCostDescription: md.render(bias.predictiveCostDescription || ''),
			predictiveConsolidationTitle: md.render(bias.predictiveConsolidationTitle || ''),
			predictiveConsolidationDescription: md.render(bias.predictiveConsolidationDescription || ''),
            codexMedium : {
                nameJa: md.render(bias.codex?.nameJa || ''),
                summary: md.render(bias.codex?.summary || ''),
                codexBroad : {
                    nameJa: md.render(bias.codex?.codex?.nameJa || ''),
                    summary: md.render(bias.codex?.codex?.summary || ''),                
                }
            },
            taskBase: { 
                nameJa: md.render(bias.taskBase?.nameJa || ''),
                summary: md.render(bias.taskBase?.summary || ''),
            },
            flavor: { 
                nameJa: md.render(bias.flavor?.nameJa || ''),
                summary: md.render(bias.flavor?.summary || ''),
            },
			biasSituations: bias.biasSituations.map((item) => {
				// instance と measures のペアを配列として定義
				const rawPairs = [
					{ instance: item.instance1, measures: item.measures1 },
					{ instance: item.instance2, measures: item.measures2 },
					{ instance: item.instance3, measures: item.measures3 }
				];

				// どちらかが空白またはnullのものを除外し、Markdown変換を適用
				const examples = rawPairs
					.filter((p) => p.instance?.trim() && p.measures?.trim())
					.map((p) => ({
						instance: md.render(p.instance || ''),
						measures: md.render(p.measures || '')
					}));

				return {
                    nameJa: md.render(item.situation?.nameJa ?? ''),
					examples // 新しい配列構造
				};
			}),
			biasUsages: bias.biasUsages.map((item) => ({
				...item,
                situationName: md.render(item.situation?.nameJa ?? ''),
				measures: md.render(item.measures || ''),
				effect: md.render(item.effect || '')
			})),
			biasChartInfo: EVALUATION_LIST.find(item => 
				((bias.thinkingMode ?? 0) >= item.rangeX.min && (bias.thinkingMode ?? 0) <= item.rangeX.max) &&
				((bias.cognitiveProcesses ?? 0) >= item.rangeY.min && (bias.cognitiveProcesses ?? 0) <= item.rangeY.max)
			),
			biasTgModelTargets,
			biasTgModelGravities,
			biasTgModelCores,
			timelines,
			biasTheories: bias.biasTheories.map((item) => ({
				title: md.render(item.theory?.nameJa ?? ''),
				description: md.render(item.description || '')
			})),
			biasMethods: bias.biasMethods.map((item) => ({
				title: md.render(item.method?.nameJa ?? ''),
				mitigationStrategy: md.render(item.mitigationStrategy || '')
			}))
		},
		codexParents: codexParents ?? [],
		tasks: tasks ?? [],
		flavors: flavors ?? [],
		tgModelTargets,
		tgModelGravities,
		tgModelCores,
		bigFour
	};
}) satisfies PageServerLoad;
