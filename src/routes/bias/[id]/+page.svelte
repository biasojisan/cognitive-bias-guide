<script lang="ts">
	import BiasCard from '$lib/components/BiasCard.svelte';
	import Chart from '$lib/components/Chart.svelte';
	import CognitiveProcess from '$lib/components/CognitiveProcess.svelte';
	import FreeEnergy from '$lib/components/FreeEnergy.svelte';
	import InfoButton from '$lib/components/InfoButton.svelte';
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import TgModel from '$lib/components/TgModel.svelte';
	import { EVALUATION_LIST, X_AXIS_METADATA, Y_AXIS_METADATA } from '$lib/constants/chart-metadata';
	import { decorateParagraphs, stripRubyTags } from '$lib/utils/text';
	import type { PageProps } from './$types';
	import {
		Badge,
		Rating,
		Carousel,
		Controls,
		CarouselIndicators,
		Indicator,
		ControlButton,
		TabItem,
		Tabs,
		Card,
		Timeline,
		TimelineItem
	} from 'flowbite-svelte';

	let { data }: PageProps = $props();

	let SECTIONS = {
		aruaru: { link: 'aruaru', title: 'あるあるランキング' },
		usage: { link: 'usage', title: '<ruby>活用術<rt>かつようじゅつ</rt></ruby>' },
		mechanism: { link: 'mechanism', title: 'メカニズム' },
		grouping: { link: 'grouping', title: '<ruby>様々<rt>さまざま</rt></ruby>な<ruby>分類<rt>ぶんるい</rt></ruby>' },
		history: { link: 'history', title: '<ruby>歴史<rt>れきし</rt></ruby>' },
		theory: { link: 'theory', title: '<ruby>理論<rt>りろん</rt></ruby>と<ruby>技法<rt>ぎほう</rt></ruby>' },
		bias: { link: 'bias', title: 'バイアス<ruby>四天王<rt>してんのう</rt></ruby>' }
	 } as const;
</script>

<svelte:head>
  	<title>{stripRubyTags(data.bias.nameJa)} | 認知バイアス非公式図鑑</title>
	<meta name="description" content="{data.bias.nameJa}の正体やメカニズムを詳しく解説。日常生活での「あるある」から具体的な活用術、歴史、関連する理論まで網羅しています。この思考のクセを理解して、より賢い判断やコミュニケーションに役立てましょう。" />
</svelte:head>

<!-- セクションのタイトル -->
{#snippet sectionTitle(
	icon: string,
	title: string,
	subTitle: string,
	bgColor: string,
	borderColor: string
)}
	<div class="{bgColor} pt-8 pb-6">
		<h2 class="relative mx-auto w-full border-5 {borderColor} p-6 text-center shadow-lg">
			<!-- 上部の円形アイコンエリア -->
			<div
				class="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 border-5 bg-white {borderColor} rounded-full"
			></div>

			<!-- アイコン -->
			<div
				class="absolute -top-10 left-1/2 z-10 h-[60px] w-20 -translate-x-1/2 text-center text-[2rem] leading-[60px]"
			>
				{icon}
			</div>

			<!-- 重なり調整用 -->
			<div class="absolute inset-0 bg-white"></div>

			<!-- テキスト本体 -->
			<span class="relative z-10">
				<div class="text-2xl font-bold text-slate-800">{@html title}</div>
				<div class="mt-2 text-base text-slate-500">{@html subTitle}</div>
			</span>
		</h2>
	</div>
{/snippet}

{#snippet stepItem(label: string, title:string, description: string, borderColor: string, bgColor: string, labelColor: string, titleColor: string, isLeftBorder: boolean)}
	<div class="relative  {isLeftBorder ? `border-l-2 pb-6 ${borderColor}` : ''} pl-6">
		<div
			class="absolute top-0 -left-[9px] h-4 w-4 rounded-full {bgColor}  shadow-sm"
		></div>
		<h3 class="mb-2 flex items-center text-lg font-bold {labelColor}">
			<span class="mr-2">{@html label}</span>
		</h3>
		<div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
			<div class="mb-1 text-base font-bold {titleColor}">
				{@html title}
			</div>
			<div class="text-base leading-relaxed text-slate-600">
				{@html description}
			</div>
		</div>
	</div>
{/snippet}

<article class="min-h-screen bg-slate-50 pb-20 font-sans">
	<!-- ==========================================
         前半：キャッチー・導入セクション（ポップ＆直感的）
         ========================================== -->
	<header class="bg-yellow-50 px-4 pt-12 pb-8 text-center">
		<div class="@container mx-auto max-w-2xl">
			<Badge color="secondary" class="mb-3 px-3 py-1 text-base">
                <ruby>認知<rt>にんち</rt></ruby>バイアス
            </Badge>
			<h1 class="font-serif text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
				{@html data.bias.nameJa ?? ""}
			</h1>
			<p class="mt-2 text-sm font-semibold tracking-widest text-slate-500 uppercase">
				{data.bias.nameEn}
			</p>

			<div class="relative my-8 inline-block">
				<img
					class="h-auto w-48 rounded-[2rem] border-4 border-white object-cover shadow-xl md:h-auto md:w-56"
					src="/images/{data.bias.thumbnail}"
					alt={stripRubyTags(data.bias.nameJa) + 'を表現したイラストの画像'}
				/>
				<div class="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
					<Badge
						color="green"
						class="border-2 border-white px-3 py-1.5 text-base font-bold shadow-md"
					>
						<ruby>重要度<rt>じゅうようど</rt></ruby>:<Rating total={5} size={25} rating={data.bias.severity || 0} />
					</Badge>
				</div>
			</div>

			<!-- 吹き出し風レイアウト -->
			<div class="mx-auto mt-6 flex w-full max-w-2xl flex-col gap-6">
				{#each data.bias.slogan?.split('|') || [] as slogan, i}
					{@const isLeft = i % 2 === 0}
					<div
						class="relative max-w-[85%] rounded-2xl border border-slate-100 bg-white p-4 font-medium text-slate-700 shadow-sm
                        {isLeft
							? "ml-4 self-start rounded-tl-none after:absolute after:top-0 after:-left-[10px] after:border-[10px] after:border-transparent after:border-t-white after:drop-shadow-[-1px_1px_1px_rgba(0,0,0,0.05)] after:content-['']"
							: "mr-4 self-end rounded-tr-none after:absolute after:top-0 after:-right-[10px] after:border-[10px] after:border-transparent after:border-t-white after:drop-shadow-[1px_1px_1px_rgba(0,0,0,0.05)] after:content-['']"}"
					>
						{@html slogan}
					</div>
				{/each}
			</div>

			<div
				class="mt-10 rounded-3xl border-2 border-white/20 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 p-3 text-white shadow-xl"
			>
				<div class="rounded-[1.4rem] border-8 border-dashed border-orange-300/50 bg-orange-600 p-8">
					<div class="flex flex-col items-center gap-2">
						<span
							class="rounded-full bg-white px-3 pt-2 pb-1 text-base font-black tracking-widest text-orange-600 uppercase"
						>
                            <ruby>簡単<rt>かんたん</rt></ruby>に<ruby>言<rt>い</rt></ruby>うと
						</span>
						<div
							class="text-center text-2xl leading-relaxed font-extrabold drop-shadow-md md:text-3xl"
						>
							{@html data.bias.summary}
                        </div>
					</div>
				</div>
			</div>
		</div>
	</header>

	<div class="h-20 bg-gradient-to-b from-yellow-50 to-gray-50"></div>

	<!-- 目次 -->
	<TableOfContents baseLink={"" + data.bias.id} items={Object.values(SECTIONS)} />

	<div class="h-20 bg-gradient-to-b from-gray-50 to-sky-50"></div>

	<!-- シチュエーションセクション -->
	<section id={SECTIONS.aruaru.link} class="@container/situations mx-auto bg-sky-50 px-5 pt-8 pb-8">
		<div class="mx-auto max-w-2xl">
			<!-- セクションのタイトル -->
			{@render sectionTitle(
				'🏆',
				SECTIONS.aruaru.title,
				'いくつ<ruby>当<rt>あ</rt></ruby>てはまる？',
				'bg-sky-50',
				'border-blue-500'
			)}

			<!-- ランキング -->
			{#if data.bias.biasSituations.length > 0}
			<div class="space-y-6">
				<Carousel
					images={Array(data.bias.biasSituations.length)}
					class="h-full shadow-xl sm:h-full xl:h-full 2xl:h-full"
				>
					{#snippet children(index: number)}
						<!-- 
                            Carouselが内部で index を渡してくるので、
                            それを使って自分のデータ配列から中身を取り出す
                        -->
						{@const situation = data.bias.biasSituations[index]}
						<div
							class="rounded-3xl border border-slate-100 bg-white px-10 pt-5 pb-14 transition-all duration-300"
						>
							<div class="mb-5 flex items-center gap-4">
								<span
									class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-lg font-black text-white shadow-inner
                                    {index === 0
										? 'bg-gradient-to-br from-yellow-300 to-yellow-500'
										: index === 1
											? 'bg-gradient-to-br from-slate-300 to-slate-400'
											: index === 2
												? 'bg-gradient-to-br from-amber-500 to-amber-700'
												: 'bg-slate-300'}"
								>
									{index + 1}
								</span>
								<h3 class="text-xl font-bold text-slate-800">{@html situation.nameJa ?? ""}</h3>
							</div>

							<!-- コンテンツ部分 -->
							<div class="space-y-6 p-2">
								{#each situation.examples as example}
									<div class="grid gap-3 rounded-l-lg border-l-4 border-blue-500 px-2">
										<!-- 具体例（問題点） -->
										<div class="flex items-start gap-3">
											<div class="pt-2 leading-relaxed text-slate-600">
												{@html example.instance}
                                            </div>
										</div>

										<!-- 対策（解決策） -->
										<div
											class="gap-1 flex items-start rounded-xl border border-emerald-100 bg-emerald-50/50 p-2"
										>
											<span class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center">
												💡
											</span>
											<div class="pt-0.5 text-base leading-relaxed text-emerald-900">
												{@html example.measures}
                                            </div>
										</div>
									</div>
								{/each}
							</div>
						</div>
						<Controls>
							{#snippet children(changeSlide)}
								<ControlButton
									forward={false}
									onclick={(e) => changeSlide(false)}
									class="w-8 bg-blue-500 hover:bg-red-500"
									spanClass="text-white"
								></ControlButton>
								<ControlButton
									forward={true}
									onclick={(e) => changeSlide(true)}
									class="w-8 bg-blue-500 hover:bg-orange-500"
									spanClass="text-white"
								></ControlButton>
							{/snippet}
						</Controls>
						<CarouselIndicators>
							{#snippet children({ selected, index })}
								<Indicator
									color={selected ? 'red' : 'blue'}
									class="h-5 w-5 border border-white text-white {selected
										? 'opacity-100'
										: 'opacity-80'}"
								>
									{index + 1}
								</Indicator>
							{/snippet}
						</CarouselIndicators>
					{/snippet}
				</Carousel>
			</div>
			{/if}
		</div>
	</section>

	<div class="h-20 bg-gradient-to-b from-sky-50 to-emerald-50"></div>

	<!-- 応用・利用セクション -->
	<section id={SECTIONS.usage.link} class="@container/usages mx-auto bg-emerald-50 px-4 py-10">
		<div class="mx-auto max-w-2xl">
			<!-- セクションのタイトル -->
			{@render sectionTitle(
				'🛠',
				SECTIONS.usage.title,
				'バイアスを<ruby>武器<rt>ぶき</rt></ruby>にしよう',
				'bg-emerald-50',
				'border-green-700'
			)}

			<img
				class="mx-auto block h-auto w-48 rounded-[2rem] border-4 border-white object-cover shadow-xl md:h-auto md:w-56"
				src="/images/{data.bias.measureImage}"
				alt="{stripRubyTags(data.bias.nameJa)}の活用方針を表現したイラストの画像"
			/>

			<div
				class="mt-5 mb-10 rounded-3xl border-2 border-white/20 bg-gradient-to-br from-lime-500 via-lime-600 to-green-600 p-3 text-white shadow-xl"
			>
				<div class="rounded-[1.4rem] border-8 border-dashed border-lime-300/50 bg-lime-600 p-8">
					<div class="flex flex-col items-center gap-2">
						<span
							class="rounded-full bg-white px-3 pt-2 pb-1 text-base font-black tracking-widest text-emerald-800 uppercase"
						>
                            <ruby>基本<rt>きほん</rt></ruby><ruby>方針<rt>ほうしん</rt></ruby>
                        </span>
						<div
							class="text-center text-2xl leading-relaxed font-extrabold drop-shadow-md md:text-3xl"
						>
							{@html data.bias.measure}
                        </div>
					</div>
				</div>
			</div>

			<Tabs class="flex-wrap" classes={{ content: 'rounded-3xl shadow-xl bg-slate-50 p-6 md:p-8' }}>
				{#each data.bias.biasUsages as usage, index}
                    <!-- HTML文を表示するためのスニペット -->
                    {#snippet tabTitle()}
                        {@html usage.situationName}
                    {/snippet}

					<TabItem
						open={index === 0}
                        titleSlot={tabTitle}
						activeClass="bg-orange-500 text-white px-5 py-2 m-1 rounded-full transition-all"
						inactiveClass="bg-white text-slate-600 px-5 py-2 m-1 rounded-full hover:bg-red-100 hover:text-red-500 border border-slate-200 shadow-sm"
					>
						<div class="mx-auto max-w-3xl">
							<h3
								class="mb-5 flex items-center gap-2 border-b pb-4 text-2xl font-extrabold text-slate-900"
							>
								{@html usage.situationName}
							</h3>

							<div class="grid gap-6 md:grid-cols-2">
								<!-- 対策 (Measures): 近接と強弱を意識 -->
								<div class="rounded-2xl border-l-8 border-blue-500 bg-white p-6 shadow-sm">
									<div class="mb-3 flex items-center gap-2 text-blue-700">
										🛡
										<span class="font-bold tracking-wider">
                                            <ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>対策<rt>たいさく</rt></ruby>
                                        </span>
									</div>
									<div class="prose max-w-none leading-relaxed text-slate-700 prose-slate">
										{@html usage.measures}
									</div>
								</div>

								<!-- 効果 (Effect): 反復とコントラスト -->
								<div class="rounded-2xl border-l-8 border-emerald-500 bg-white p-6 shadow-sm">
									<div class="mb-3 flex items-center gap-2 text-emerald-700">
										🚀
										<span class="font-bold tracking-wider"><ruby>得<rt>え</rt></ruby>られる<ruby>効果<rt>こうか</rt></ruby></span>
									</div>
									<div
										class="prose max-w-none leading-relaxed text-slate-700 prose-emerald"
									>
										{@html usage.effect}
									</div>
								</div>
							</div>
						</div>
					</TabItem>
				{/each}
			</Tabs>
		</div>
	</section>

	<div class="h-20 bg-gradient-to-b from-emerald-50 to-pink-50"></div>

	<!-- ==========================================
         後半：詳細・深掘りセクション（アカデミック＆構造的）
         ========================================== -->

	<!-- メカニズム -->
	<section id={SECTIONS.mechanism.link} class="@container/usages mx-auto bg-pink-50 px-4 py-10">
		<div class="mx-auto max-w-2xl">
			{@render sectionTitle(
				'⚙️',
				SECTIONS.mechanism.title,
				'<ruby>理解<rt>りかい</rt></ruby>を<ruby>深<rt>ふか</rt></ruby>める',
				'bg-pink-50',
				'border-pink-500'
			)}

			<div class="my-8 max-w-2xl text-left">
				<!-- タイトル -->
				<div class="mb-6 flex items-center gap-2">
					<span class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm">
						<span class="text-sm">●</span>
					</span>
					<h3 class="relative pb-1 text-2xl font-bold text-slate-800 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-blue-200">
						<ruby>定義<rt>ていぎ</rt></ruby>
					</h3>
				</div>

				<img
					class="mx-auto h-auto w-48 rounded-[2rem] border-4 border-white object-cover shadow-xl md:h-auto md:w-56"
					src="/images/{data.bias.thumbnail}"
					alt={stripRubyTags(data.bias.nameJa) + 'を表現したイラストの画像'}
				/>

				<!-- 説明文 -->
				<div class="mt-8 rounded-2xl border-l-4 border-blue-400 bg-white p-5 shadow-sm">
					<div class="prose max-w-none text-base leading-relaxed text-slate-700">
						{@html data.bias.definition}
					</div>
				</div>
			</div>

			<div class="my-8 max-w-2xl text-left">
				<!-- タイトル -->
				<div class="mb-6 flex items-center gap-2">
					<span class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
						<span class="text-sm">●</span>
					</span>
					<h3 class="relative pb-1 text-2xl font-bold text-slate-800 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-emerald-200">
						<ruby>概略図<rt>がいりゃくず</rt></ruby>
					</h3>
				</div>

				<TgModel
					targets={stripRubyTags(data.bias.structureTargetTitle ?? '')}
					gravities={stripRubyTags(data.bias.structureKindTitle ?? '')}
					sources={stripRubyTags(data.bias.structureTriggerTitle ?? '')}
				></TgModel>

				<div class="mt-8 space-y-8">
					<!-- ターゲットセクション -->
					<section class="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-5">
						<div class="mb-2 flex items-center">
							<span class="mr-2 rounded bg-orange-500 px-2 pt-2 pb-0.5 text-base font-bold text-white"
							>
                                <ruby>目的<rt>もくてき</rt></ruby>
                            </span>
							<h4 class="text-lg font-bold text-orange-900">
								{@html data.bias.structureTargetTitle ?? ''}
							</h4>
						</div>
						<div class="text-base leading-relaxed text-slate-700">
							{@html data.bias.structureTargetDescription ?? ''}
						</div>
					</section>

					<!-- トリガーセクション -->
					<section class="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-5">
						<div class="mb-2 flex items-center">
							<span class="mr-2 rounded bg-blue-500 px-2 py-0.5 text-base font-bold text-white"
								>トリガー</span
							>
							<h4 class="text-lg font-bold text-blue-900">
								{@html data.bias.structureTriggerTitle ?? ''}
							</h4>
						</div>
						<div class="text-base leading-relaxed text-slate-700">
							{@html data.bias.structureTriggerDescription ?? ''}
						</div>
					</section>

					<!-- 歪みの種類セクション -->
					<section class="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-5">
						<div class="mb-2 flex items-center">
							<span class="mr-2 rounded bg-emerald-500 px-2 pt-2 pb-0.5 text-base font-bold text-white"
							>
                                <ruby>歪<rt>ゆが</rt></ruby>み
                            </span>
							<h4 class="text-lg font-bold text-emerald-900">
								{@html data.bias.structureKindTitle ?? ''}
							</h4>
						</div>
						<div class="prose max-w-none text-base leading-relaxed text-slate-700">
							{@html data.bias.structureKindDescription ?? ''}
						</div>
					</section>
				</div>
			</div>

			<div class="my-8 max-w-2xl text-left">
				<!-- タイトル -->
				<div class="mb-6 flex items-center gap-2">
					<span class="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white shadow-sm">
						<span class="text-sm">●</span>
					</span>
					<h3 class="relative pb-1 text-2xl font-bold text-slate-800 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-purple-200">
						<ruby>認知<rt>にんち</rt></ruby>プロセス
					</h3>
				</div>
				<div class="mb-4">
                    <ruby>図<rt>ず</rt></ruby>の<ruby>中<rt>なか</rt></ruby>の<ruby>単語<rt>たんご</rt></ruby>をクリックすると、<ruby>説明<rt>せつめい</rt></ruby>が<ruby>表示<rt>ひょうじ</rt></ruby>されます。
                </div>

				<div class="text-xl font-bold border-l-4 border-purple-500 p-2 ml-4 mb-4">
					<h4>
						情報処理モデルによる説明
					</h4>
				</div>
				
                <CognitiveProcess />

				<div class="mx-auto mt-4 max-w-md p-2 font-sans text-slate-800">
					<div class="">
						<!-- 1. 知覚 -->
						<div class="relative border-l-2 border-blue-400 pb-6 pl-6">
							<div
								class="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-blue-400 shadow-sm"
							></div>
							<h3 class="mb-2 flex items-center text-lg font-bold text-blue-900">
								<span class="mr-2">01. <ruby>知覚<rt>ちかく</rt></ruby></span>
							</h3>
							<div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
								<div class="mb-1 text-base font-bold text-blue-600">
									{@html data.bias.processPerceptionTitle}
								</div>
								<div class="text-base leading-relaxed text-slate-600">
									{@html data.bias.processPerceptionDescription}
								</div>
							</div>
						</div>

						<!-- 2. 照合 -->
						<div class="relative border-l-2 border-indigo-400 pb-6 pl-6">
							<div
								class="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-indigo-400 shadow-sm"
							></div>
							<h3 class="mb-2 flex items-center text-lg font-bold text-indigo-900">
								<span class="mr-2">02. <ruby>照合<rt>しょうごう</rt></ruby></span>
							</h3>
							<div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
								<div class="mb-1 text-base font-bold text-indigo-600">
									{@html data.bias.processMatchingTitle}
								</div>
								<div class="text-base leading-relaxed text-slate-600">
									{@html data.bias.processMatchingDescription}
								</div>
							</div>
						</div>

						<!-- 3. 判断 -->
						<div class="relative border-l-2 border-purple-400 pb-6 pl-6">
							<div
								class="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-purple-400 shadow-sm"
							></div>
							<h3 class="mb-2 flex items-center text-lg font-bold text-purple-900">
								<span class="mr-2">03. <ruby>判断<rt>はんだん</rt></ruby></span>
							</h3>
							<div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
								<div class="mb-1 text-base font-bold text-purple-600">
									{@html data.bias.processJudgmentTitle}
								</div>
								<div class="text-base leading-relaxed text-slate-600">
									{@html data.bias.processJudgmentDescription}
								</div>
							</div>
						</div>

						<!-- 4. 反応 -->
						<div class="relative pl-6">
							<div
								class="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-orange-400 shadow-sm"
							></div>
							<h3 class="mb-2 flex items-center text-lg font-bold text-orange-900">
								<span class="mr-2">04. <ruby>判断<rt>はんだん</rt></ruby></span>
							</h3>
							<div
								class="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm ring-1 ring-orange-200"
							>
								<div class="mb-1 text-base font-bold text-orange-600">
									{@html data.bias.processResponseTitle}
								</div>
								<div class="text-base leading-relaxed text-slate-600">
									{@html data.bias.processResponseDescription}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="text-xl font-bold border-l-4 border-purple-500 p-2 mt-4 ml-4 mb-4">
					<h4>
						予測符号化モデルによる説明
					</h4>
				</div>
				<FreeEnergy />
				<div class="mx-auto mt-4 max-w-md p-2 font-sans text-slate-800">
					{@render stepItem(
						"01.<ruby>予測<rt>よそく</rt></ruby>", 
						data.bias.predictivePredictionTitle ?? "", 
						data.bias.predictivePredictionDescription ?? "", 
						"border-blue-400",
						"bg-blue-400",
						"text-blue-900",
						"text-blue-600",
						true
					)}
					{@render stepItem(
						"02.ズレの<ruby>確認<rt>かくにん</rt></ruby>", 
						data.bias.predictiveAccuracyTitle ?? "", 
						data.bias.predictiveAccuracyDescription ?? "", 
						"border-indigo-400",
						"bg-indigo-400",
						"text-indigo-900",
						"text-indigo-600",
						true
					)}
					{@render stepItem(
						"03.どれを<ruby>信<rt>しん</rt></ruby>じる？", 
						data.bias.predictiveCostTitle ?? "", 
						data.bias.predictiveCostDescription ?? "", 
						"border-purple-400",
						"bg-purple-400",
						"text-purple-900",
						"text-purple-600",
						true
					)}
					{@render stepItem(
						"04.どう<ruby>合<rt>あ</rt></ruby>わせる？", 
						data.bias.predictiveConsolidationTitle?? "", 
						data.bias.predictiveConsolidationDescription ?? "", 
						"border-orange-400",
						"bg-orange-400",
						"text-orange-900",
						"text-orange-600",
						false
					)}
				</div>
			</div>
		</div>
	</section>

	<div class="h-20 bg-gradient-to-b from-pink-50 to-amber-50"></div>

	<!-- 分類 -->
	<section id={SECTIONS.grouping.link} class="@container/usages mx-auto bg-amber-50 px-4 py-10">
		<div class="mx-auto max-w-2xl">
			{@render sectionTitle(
				'📂',
				SECTIONS.grouping.title,
				'バイアスの<ruby>特徴<rt>とくちょう</rt></ruby>を<ruby>掴<rt>つか</rt></ruby>む',
				'bg-amber-50',
				'border-amber-500'
			)}

			<div class="grid gap-8">
				<!-- Cognitive Bias Codex -->
				<Card class="max-w-none shadow-sm">
					<div class="mb-4 flex items-center border-b pt-2 pb-2">
						<h3 class="ml-2 text-xl font-bold text-gray-800 dark:text-white">
							Cognitive Bias Codex
						</h3>
						<InfoButton>
							<ruby>バスター・ベンソン<rt>Buster Benson</rt></ruby>が<ruby>認知<rt>にんち</rt></ruby>バイアスを、「<ruby>脳<rt>のう</rt></ruby>が<ruby>直面<rt>ちょくめん</rt></ruby>する４つの<ruby>問題<rt>もんだい</rt></ruby>」に<ruby>分類<rt>ぶんるい</rt></ruby>し、<ruby>図<rt>ず</rt></ruby>にまとめた<ruby>視覚的<rt>しかくてき</rt></ruby>な<ruby>地図<rt>ちず</rt></ruby>。
							<a
								class="ml-1 inline-flex items-center text-blue-500 hover:underline"
								href="https://buster.medium.com/cognitive-bias-cheat-sheet-55a472476b18"
								target="_blank"
                            >
                                <ruby>参照<rt>さんしょう</rt></ruby>
                            </a>
						</InfoButton>
					</div>

					<div class="space-y-6 pl-2">
						<div class="flex flex-wrap gap-2">
							{#each data.codexParents as codexParent}<Badge
									rounded
									large
									color={data.bias.codex?.parentId === codexParent.id ? 'primary' : 'gray'}
									class="border {data.bias.codex?.parentId === codexParent.id
										? ''
										: 'border-gray-200 text-gray-400'}"
								>
									{@html codexParent.nameJa}
								</Badge>
							{/each}
						</div>

						<div class="grid gap-4 sm:grid-cols-2">
							<div class="rounded-lg border-l-4 border-primary-500 bg-gray-50 p-4 dark:bg-gray-800">
								<p class="mb-1 text-sm text-gray-500">
									<ruby>大分類<rt>だいぶんるい</rt></ruby>
								</p>
								<div class="mb-1 text-lg font-bold  text-orange-700 dark:text-orange-400">
									{@html decorateParagraphs(data.bias.codexMedium.codexBroad.nameJa, "【", "】")}
								</div>
								<p class="text-base text-gray-600 dark:text-gray-400">
									{@html data.bias.codexMedium.codexBroad.summary}
								</p>
							</div>
							<div
								class="rounded-lg border-l-4 border-secondary-500 bg-gray-50 p-4 dark:bg-gray-800"
							>
								<p class="mb-1 text-sm text-gray-500">
									<ruby>中分類<rt>ちゅうぶんるい</rt></ruby>
								</p>
								<div class="mb-1 text-lg font-bold  text-blue-700 dark:text-blue-400">
									{@html decorateParagraphs(data.bias.codexMedium.nameJa, "【", "】")}
								</div>
								<div class="text-base text-gray-600 dark:text-gray-400">
									{@html data.bias.codexMedium.summary}
								</div>
							</div>
						</div>
					</div>
				</Card>

				<!-- タスクベース -->
				<Card class="max-w-none shadow-sm">
					<div class="mb-4 flex items-center border-b pt-2 pb-2">
						<h3 class="ml-2 text-xl font-bold text-gray-800 dark:text-white">タスクベースの<ruby>分類<rt>ぶんるい</rt></ruby></h3>
						<InfoButton>
                            <ruby>Dimara<rt>ディマラ</rt></ruby>らによって、データ<ruby>分析<rt>ぶんせき</rt></ruby>の<ruby>各作業工程<rt>かくさぎょうこうてい</rt></ruby>（タスク）ごとに、<ruby>注意<rt>ちゅうい</rt></ruby>すべき<ruby>認知<rt>にんち</rt></ruby>バイアスを<ruby>整理<rt>せいり</rt></ruby>・<ruby>体系化<rt>たいけいか</rt></ruby>した<ruby>分類法<rt>ぶんるいほう</rt></ruby>。
						</InfoButton>
					</div>

					<div class="grid gap-6">
						<!-- タスク -->
						<div class="space-y-3 pl-2">
							<div class="flex flex-wrap gap-1.5">
								{#each data.tasks as task}
									<Badge
										rounded
										large
										color={data.bias.taskBaseId === task.id ? 'primary' : 'gray'}
										class="border {data.bias.taskBaseId === task.id
											? ''
											: 'border-gray-200 text-gray-400'}"
									>
										{@html task.nameJa}
									</Badge>
								{/each}
							</div>
							<div
								class="rounded-lg border-l-4 border-primary-500 bg-gray-50 p-3 text-base dark:bg-orange-800"
							>
								<span class="font-bold text-orange-700 dark:text-orange-400">
									{@html decorateParagraphs(data.bias.taskBase?.nameJa, "【", "】")}
								</span>
								<span class="text-gray-600 dark:text-gray-300">{@html data.bias.taskBase?.summary}</span>
							</div>
						</div>

						<!-- フレーバー -->
						<div class="space-y-3 pl-2">
							<div class="flex flex-wrap gap-1.5">
								{#each data.flavors as flavor}
									<Badge
										rounded
										large
										color={data.bias.flavorId === flavor.id ? 'secondary' : 'gray'}
										class="border {data.bias.flavorId === flavor.id
											? ''
											: 'border-gray-200 text-gray-400'}"
									>
										{@html flavor.nameJa}
									</Badge>
								{/each}
							</div>
							<div
								class="rounded-lg border-l-4 border-secondary-500 bg-gray-50 p-3 text-base dark:bg-gray-800"
							>
								<span class="font-bold text-blue-700 dark:text-blue-400">
                                    {@html decorateParagraphs(data.bias.flavor?.nameJa, "【", "】")}
                                </span>
								<span class="text-gray-600 dark:text-gray-300">{@html data.bias.flavor?.summary}</span>
							</div>
						</div>
					</div>
				</Card>

				<!-- 発生の兆しマップ -->
				<Card class="max-w-none shadow-sm">
					<div class="mb-4 flex items-center border-b pt-2 pb-2">
						<h3 class="ml-2 text-xl font-bold text-gray-800 dark:text-white">
							<ruby>認知<rt>にんち</rt></ruby>バイアス<ruby>発生<rt>はっせい</rt></ruby>マップ
						</h3>
						<InfoButton>
							<ruby>認知<rt>にんち</rt></ruby>バイアスが、<ruby>思考<rt>しこう</rt></ruby>モード（<ruby>直感的<rt>ちょっかんてき</rt></ruby>・<ruby>論理的<rt>ろんりてき</rt></ruby>）と<ruby>認知<rt>にんち</rt></ruby>フェーズ（<ruby>情報取得<rt>じょうほうしゅとく</rt></ruby>・<ruby>意思決定<rt>いしけってい</rt></ruby>）の、どの<ruby>段階<rt>だんかい</rt></ruby>で<ruby>発生<rt>はっせい</rt></ruby>するかを<ruby>示<rt>しめ</rt></ruby>す4<ruby>象限<rt>しょうげん</rt></ruby>マップ。
						</InfoButton>
					</div>

					<div class="grid items-start gap-6 md:grid-cols-2">
						<div class="rounded-xl bg-white p-2 dark:bg-gray-800">
							<Chart
								x={data.bias.cognitiveProcesses ?? 0}
								y={data.bias.thinkingMode ?? 0}
								name={data.bias.nameJa ?? ''}
							></Chart>
						</div>

						<div class="space-y-6">
							<!-- 思考モード -->
							<div class="rounded-lg border-l-4 border-primary-500 p-4 dark:bg-gray-800">
								<p class="mb-2 font-semibold text-base text-gray-500">
									<ruby>思考<rt>しこう</rt></ruby>モード
								</p>
								<div class="mb-3 text-xl font-bold text-primary-600 dark:text-primary-400">
									{@html X_AXIS_METADATA[data.bias.thinkingMode ?? 0].zone}
                                </div>

								<div class="mb-3 flex flex-wrap gap-1">
									{#each Array(10) as _, i}
										{@const active = Math.abs(data.bias.thinkingMode ?? 0) === i + 1}
										<Badge
											large
											rounded
											color={active ? 'primary' : 'gray'}
											class={active ? 'ring-2 ring-primary-300' : 'border-gray-200 text-gray-400'}
										>
											{i + 1}
										</Badge>
									{/each}
								</div>
								<div class="text-base leading-relaxed text-gray-600 dark:text-gray-300">
									<p class="font-bold text-primary-600 dark:text-primary-400">
										【{@html X_AXIS_METADATA[data.bias.thinkingMode ?? 0].label}】
									</p>
									<p>
										{@html X_AXIS_METADATA[data.bias.thinkingMode ?? 0].description}
									</p>
								</div>
							</div>

							<!-- 認知フェーズ -->
							<div
								class="rounded-lg border-l-4 border-secondary-500 p-4 dark:bg-gray-800"
							>
								<p class="mb-2 font-semibold text-base text-gray-500">
									<ruby>認知<rt>にんち</rt></ruby>フェーズ
								</p>
								<div class="mb-3 text-xl font-bold text-secondary-600 dark:text-secondary-400">
									{@html Y_AXIS_METADATA[data.bias.cognitiveProcesses ?? 0].zone}
                                </div>

								<div class="mb-3 flex flex-wrap gap-1">
									{#each Array(10) as _, i}{@const tive =
											Math.abs(data.bias.cognitiveProcesses ?? 0) === i + 1}
										<Badge
											rounded
											large
											color={tive ? 'primary' : 'gray'}
											class={tive ? 'ring-2 ring-primary-300' : 'border-gray-200 text-gray-400'}
										>
											{i + 1}
										</Badge>
									{/each}
								</div>
								<div class="text-base leading-relaxed text-gray-600 dark:text-gray-300">
									<p class="font-bold text-secondary-600 dark:text-secondary-400">
										【{@html Y_AXIS_METADATA[data.bias.cognitiveProcesses ?? 0].label}】
									</p>
									<p>
										{@html Y_AXIS_METADATA[data.bias.cognitiveProcesses ?? 0].description}
									</p>
								</div>
							</div>

							<!-- 象限 -->
							<div
								class="rounded-lg border-l-4 border-emerald-500 p-4 dark:bg-gray-800"
							>
								<p class="mb-2 font-semibold text-base text-gray-500">
									<ruby>象限<rt>しょうげん</rt></ruby>
								</p>
								<div class="mb-3 flex flex-wrap gap-1">
									{#each EVALUATION_LIST as item}
										{@const active = item.nameJp === data.bias.biasChartInfo?.nameJp}
										<Badge
											rounded
											large
											color={active ? 'primary' : 'gray'}
											class={active ? 'ring-2 ring-primary-300' : 'border-gray-200 text-gray-400'}
										>
											{@html item.nameJp}
										</Badge>
									{/each}
								</div>
								<div class="text-base leading-relaxed text-gray-600 dark:text-gray-300">
									<p class="font-bold text-emerald-700 dark:text-emerald-400">
										【{@html data.bias.biasChartInfo?.nameJp}】
									</p>
									<p>
										{@html data.bias.biasChartInfo?.summary}
									</p>
								</div>
							</div>
						</div>
					</div>
				</Card>

				<!-- TGモデル -->
				<Card class="max-w-none shadow-sm">
					<div class="mb-4 flex items-center border-b pt-2 pb-2">
						<h3 class="ml-2 text-xl font-bold text-gray-800 dark:text-white">
							Target Gravity Model
						</h3>
						<InfoButton>
							<ruby>認知<rt>にんち</rt></ruby>バイアスを「Target（<ruby>狙<rt>ねら</rt></ruby>うべき<ruby>合理性<rt>ごうりせい</rt></ruby>）」と、その<ruby>軌道<rt>きどう</rt></ruby>を<ruby>曲<rt>ま</rt></ruby>げてしまう「Gravity Force（<ruby>引力<rt>いんりょく</rt></ruby>）」の<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせとして<ruby>再定義<rt>さいていぎ</rt></ruby>した<ruby>分類体系<rt>ぶんるいたいけい</rt></ruby>。
						</InfoButton>
					</div>

					<div class="grid gap-6">
						<!-- ターゲット -->
						<div class="space-y-3 rounded-lg border-l-4 border-primary-500 pl-2 text-lg">
							<div>
								<strong>🎯Target(<ruby>目指<rt>めざ</rt></ruby>すべき<ruby>合理的<rt>ごうりてき</rt></ruby>なゴール)</strong>
							</div>
							<div class="flex flex-wrap gap-1.5">
								{#each Object.entries(data.tgModelTargets) as [category, info]}
									<Badge
										rounded
										large
										color={info.color}
										class="border {info.color === 'gray' ? 'border-gray-200 text-gray-400' : ''}"
									>
										{@html info.nameJp}
									</Badge>
								{/each}
							</div>
							<div>
								{#each data.bias.biasTgModelTargets as target}
									{@const color = data.tgModelTargets[target.category ?? ''].color}
									<div class="bg-{color}-50 dark:bg-{color}-900/20 rounded p-3 text-base">
										<span class="font-bold text-{color}-700 dark:text-{color}-400">
											{@html decorateParagraphs(data.tgModelTargets[target.category ?? ''].label, "【", "】")}
										</span>
										<span class="text-gray-600 dark:text-gray-300">
											{@html data.tgModelTargets[target.category ?? ''].summary}
										</span>
									</div>
								{/each}
							</div>
						</div>

						<!-- コア -->
						<div class="space-y-3 rounded-lg border-l-4 border-secondary-500 pl-2 text-lg">
							<div>
								<strong>🪐Core(<ruby>引力<rt>いんりょく</rt></ruby>の<ruby>発生源<rt>はっせいげん</rt></ruby>
)</strong>
							</div>
							<div class="flex flex-wrap gap-1.5">
								{#each Object.entries(data.tgModelCores) as [category, info]}
									<Badge
										rounded
										large
										color={info.color}
										class="border {info.color === 'gray' ? 'border-gray-200 text-gray-400' : ''}"
									>
										{@html info.nameJp}
									</Badge>
								{/each}
							</div>
							<div>
								{#each data.bias.biasTgModelCores as core}
									{@const color = data.tgModelCores[core.category ?? ''].color}
									<div class="bg-{color}-50 dark:bg-{color}-900/20 rounded p-3 text-base">
										<span class="font-bold text-{color}-700 dark:text-{color}-400"
											>{@html decorateParagraphs(data.tgModelCores[core.category ?? ''].label, "【", "】")}
										</span>
										<span class="text-gray-600 dark:text-gray-300"
											>{@html data.tgModelCores[core.category ?? ''].summary}
										</span>
									</div>
								{/each}
							</div>
						</div>

						<!-- グラビティ -->
						<div class="space-y-3 rounded-lg border-l-4 border-emerald-500 pl-2 text-lg">
							<div>
								<strong>🪐Gravity Force(<ruby>判断<rt>はんだん</rt></ruby>を<ruby>歪<rt>ゆが</rt></ruby>める<ruby>引力<rt>いんりょく</rt></ruby>
)</strong>
							</div>
							<div class="flex flex-wrap gap-1.5">
								{#each Object.entries(data.tgModelGravities) as [category, info]}
									<Badge
										rounded
										large
										color={info.color}
										class="border {info.color === 'gray' ? 'border-gray-200 text-gray-400' : ''}"
									>
										{@html info.nameJp}
									</Badge>
								{/each}
							</div>
							<div>
								{#each data.bias.biasTgModelGravities as gravity}
									{@const color = data.tgModelGravities[gravity.category ?? ''].color}
									<div class="bg-{color}-50 dark:bg-{color}-900/20 rounded p-3 text-base">
										<span class="font-bold text-{color}-700 dark:text-{color}-400"
											>{@html decorateParagraphs(data.tgModelGravities[gravity.category ?? ''].label, "【", "】")}
										</span>
										<span class="text-gray-600 dark:text-gray-300"
											>{@html data.tgModelGravities[gravity.category ?? ''].summary}
										</span>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	</section>

	<div class="h-20 bg-gradient-to-b from-amber-50 to-teal-50"></div>

	<!-- タイムライン -->
	<section id={SECTIONS.history.link} class="@container mx-auto bg-teal-50 px-5 pt-8 pb-8">
		<div class="mx-auto max-w-2xl">
			<!-- セクションのタイトル -->
			{@render sectionTitle('📜 ', SECTIONS.history.title, '<ruby>先人達<rt>せんじんたち</rt><ruby>からの<ruby>贈<rt>おく</rt></ruby>り<ruby>物<rt>もの</rt></ruby>', 'bg-teal-50', 'border-teal-500')}

			<Timeline order="vertical">
				{#each data.bias.timelines as timeline, index}              
                    <TimelineItem
						title=''
						date=''
						color={'primary'}
						isLast={index === data.bias.timelines.length - 1}
						classes={{ 
                            div: 'ring-4 ring-primary-200', 
                            connector: 'w-1.5' 
                        }}
                        divClass="ring-4 ring-primary-200"
                        connectorClass="w-1.5"
						datePrefix=""
					>
						<h3 class="flex ml-4 items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
							{@html timeline.title ?? ''}
						</h3>
						<time class="ml-4 mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							{@html timeline.dateText}
						</time>
						<Badge large border class="ml-4 mb-2">{@html timeline.category ?? ''}</Badge>
						<div class="ml-4 rounded-2xl border bg-white p-4 shadow-sm dark:bg-gray-800">
							<div class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
								{@html timeline.contents ?? ''}
							</div>
						</div>
						<div class="mt-2 ml-4 flex flex-wrap gap-1.5">
							{#each timeline.badges as badge}
								<Badge large rounded color="secondary">
									{@html badge.trim()}
								</Badge>
							{/each}
						</div>
					</TimelineItem>
				{/each}
			</Timeline>
		</div>
	</section>

	<div class="h-20 bg-gradient-to-b from-teal-50 to-violet-50"></div>

	<!-- 理論と技法一覧 -->
	<section id={SECTIONS.theory.link} class="@container mx-auto bg-violet-50 px-4 py-10">
		<div class="mx-auto max-w-2xl">
			{@render sectionTitle(
				'📂',
				SECTIONS.theory.title,
				'<ruby>関連<rt>かんれん</rt></ruby>する<ruby>知識<rt>ちしき</rt></ruby>の<ruby>一覧<rt>いちらん</rt></ruby>',
				'bg-violet-50',
				'border-violet-500'
			)}

			<!-- 理論セクション -->
			<div>
				<h3
					class="text-black-400 mb-6 flex items-center gap-2 font-black tracking-[0.2em] uppercase"
				>
					<span class="h-px flex-1 bg-slate-400"></span>
					<ruby>関連<rt>かんれん</rt></ruby>する<ruby>心理学理論<rt>しんりがくりろん</rt></ruby>
					<span class="h-px flex-1 bg-slate-400"></span>
				</h3>
				<div class="grid grid-cols-1 gap-3">
					{#each data.bias.biasTheories as { title, description }}
						<div
							class="group rounded-2xl border border-slate-200/60 bg-white p-5 transition-all hover:border-indigo-200 hover:shadow-sm"
						>
							<h4 class="mb-2 flex items-center gap-2.5 font-bold text-lg text-slate-800">
								<span
									class="size-2 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
								></span>
								{@html title}
							</h4>
							<div class="prose max-w-none pl-4.5 text-base leading-relaxed text-slate-600">
								{@html description}
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- 技法セクション -->
			<div class="mt-14">
				<h3
					class="text-black-400 mb-6 flex items-center gap-2 font-black tracking-[0.2em] uppercase"
				>
					<span class="h-px flex-1 bg-slate-400"></span>
					<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>対策<rt>たいさく</rt></ruby>・<ruby>技法<rt>ぎほう</rt></ruby>
					<span class="h-px flex-1 bg-slate-400"></span>
				</h3>
				<div class="grid grid-cols-1 gap-3">
					{#each data.bias.biasMethods as { title, mitigationStrategy }}
						<div
							class="group rounded-2xl border border-slate-200/60 bg-white p-5 transition-all hover:border-teal-200 hover:shadow-sm"
						>
							<h4 class="mb-2 flex items-center gap-2.5 font-bold text-lg text-slate-800">
								<span
									class="size-2 rounded-full bg-secondary-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]"
								></span>
								{@html title}
							</h4>
							<div class="prose max-w-none pl-4.5 text-base leading-relaxed text-slate-600">
								{@html mitigationStrategy}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<div class="to-white-50 h-20 bg-gradient-to-b from-violet-50"></div>

	<section id={SECTIONS.bias.link} class="bg-white-50 @container mx-auto px-4 pt-10">
		<div class="mx-auto max-w-2xl">
			<h2 class="mb-5 text-2xl font-bold">{@html SECTIONS.bias.title}</h2>
			<div class="flex flex-wrap gap-4">
				{#each data.bigFour as bias (bias.id)}
					<BiasCard id={bias.id} name={bias.nameJa} summary={bias.summary} thumbnail={bias.thumbnail} />
				{/each}
			</div>
		</div>
	</section>
</article>
