export const TARGET = '目的';
export const GRAVITY = '引力';
export const CORE = 'コア';

type TargetMetadata = {
	nameJp: string;
	nameEn: string;
	label: string;
	summary: string;
};

export type TargetWithColor = TargetMetadata & {
	color: 'primary' | 'secondary' | 'gray';
};

export const TARGET_INFO: Record<string, TargetMetadata> = {
	['予測']: {
		nameJp: '{予測|よそく}',
		nameEn: 'Prediction Accuracy',
		label: '{未来|みらい}・{事実|じじつ}の{正確|せいかく}な{予測|よそく}',
		summary: '{根拠|こんきょ}のない{期待|きたい}を{排|はい}し、データや{事実|じじつ}に{基|もと}づいて{見通|みとお}しを{立|た}てる。'
	},
	['確率']: {
		nameJp: '{確率|かくりつ}',
		nameEn: 'Probabilistic Calibration',
		label: '「{確|たし}からしさ」の{正|ただ}しい{見積|みつ}もり',
		summary: '{極端|きょくたん}な{楽観|らっかん}や{不安|ふあん}に{陥|おちい}らず、『{起|お}こりうる{度合い|どあい}』を{冷静|れいせい}に{量|はか}る。'
	},
	['因果']: {
		nameJp: '{因果|いんが}',
		nameEn: 'Causal Inference',
		label: '「{本当|ほんとう}の{原因|げんいん}」の{特定|とくてい}',
		summary: '{表面的な|ひょうめんてきな}つながりに{惑|まど}わされず、『{何|なに}が{結果|けっか}を{変|か}えたのか』を{突|つ}き{止|と}める。'
	},
	['更新']: {
		nameJp: '{更新|こうしん}',
		nameEn: 'Bayesian Updating',
		label: '{新情報|しんじょうほう}による「{柔軟|じゅうなん}な{軌道修正|きどうしゅうせい}」',
		summary: '{過去|かこ}の{判断|はんだん}に{固執|こしつ}せず、{新|あたら}しい{情報|じょうほう}に{合|あ}わせて{考|かんが}えをアップデートする。'
	},
	['損得']: {
		nameJp: '{損得|そんとく}',
		nameEn: 'Utility Consistency',
		label: '「{損得|そんとく}・リスク」のブレない{評価|ひょうか}',
		summary: 'その{場|ば}の{感情|かんじょう}やもったいなさに{引|ひ}きずられず、{長期的|ちょうきてき}なプラスを{優先|ゆうせん}する。'
	},
	['選択']: {
		nameJp: '{選択|せんたく}',
		nameEn: 'Choice Rationality',
		label: '{見|み}せ{方|かた}に{惑|まど}わされない「{最適|さいてき}な{選択|せんたく}」',
		summary: '{見|み}せ{方|かた}や{言葉|ことば}の{勢|いきお}いに{騙|だま}されず、{中身|なかみ}の{良|よ}し{悪|あ}しで{判断|はんだん}する。'
	},
	['公平']: {
		nameJp: '{公平|こうへい}',
		nameEn: 'Fairness / Impartiality',
		label: '「{先入観|せんにゅうかん}のない」{公平|こうへい}な{判断|はんだん}',
		summary: '{肩書き|かたがき}や{好|す}き{嫌|きら}いの{先入観|せんにゅうかん}を{捨|す}て、{目|め}の{前|まえ}の{相手|あいて}を{正|ただ}しく{評価|ひょうか}する。'
	},
	['俯瞰']: {
		nameJp: '{俯瞰|ふかん}',
		nameEn: 'Metacognitive Calibration',
		label: '「{自分|じぶん}の{実力|じつりょく}・{限界|げんかい}」の{客観視|きゃっかんし}',
		summary: '{自分|じぶん}の{知識|ちしき}や{感情|かんじょう}のクセを{自覚|じかく}し、{自分|じぶん}を{客観的|きゃっかんてき}な{視点|してん}で{眺|なが}める。'
	}
};


type GravityMetadata = {
	nameJp: string;
	nameEn: string;
	label: string;
	summary: string;
};

export type GravityWithColor = GravityMetadata & {
	color: 'primary' | 'secondary' | 'gray';
};

export const GRAVITY_INFO: Record<string, GravityMetadata> = {
	['代用']: {
		nameJp: '{代用|だいよう}',
		nameEn: 'Attribute Substitution',
		label: '{問|と}いのすり{替|か}え',
		summary: '{難|むずか}しい{問|と}いを{避|さ}け、{直感|ちょっかん}で{答|こた}えられる{簡単|かんたん}な{問|と}いに{無意識|むいしき}に{置|お}き{換|か}えて{判断|はんだん}してしまう。'
	},
	['固執']: {
		nameJp: '{固執|こしつ}',
		nameEn: 'Anchoring',
		label: '{初期値|しょきち}の{呪縛|じゅばく}',
		summary: '{最初|さいしょ}に{提示|ていじ}された{数字|すうじ}や{情報|じょうほう}に{思考|しこう}が{固定|こてい}され、そこから{論理的|ろんりてき}な{調整|ちょうせい}ができないくなる。'
	},
	['忌避']: {
		nameJp: '{忌避|きひ}',
		nameEn: 'Affect & Loss Aversion',
		label: '{感情|かんじょう}と{現状維持|げんじょういじ}',
		summary: '{損|そん}をすることを{過度|かど}に{恐|おそ}れ、{合理的|ごうりてき}な{期待値|きたいち}よりも「{今|いま}のまま」や「{確実|かくじつ}さ」を{優先|ゆうせん}する。'
	},
	['保身']: {
		nameJp: '{保身|ほしん}',
		nameEn: 'Motivated Reasoning',
		label: '{自己正当化|じこせいとうか}（{内的防衛|ないてきぼうえい}）',
		summary:
			'{自分|じぶん}のプライドや{信念|しんねん}を{守|まも}るため、{自分|じぶん}に{都合|つごう}の{良|よ}い{証拠|しょうこ}だけを{集|あつ}め、{不都合|ふつごう}な{情報|じょうほう}を{黙殺|もくさつ}する。'
	},
	['同調']: {
		nameJp: '{同調|どうちょう}',
		nameEn: 'Social Conformity',
		label: '{集団|しゅうだん}・{空気|くうき}の{圧力|あつりょく}（{外的圧力|がいてきあつりょく}）',
		summary: '{場|ば}の{空気|くうき}や{権威|けんい}に{抗|あらが}えず、{和|わ}を{乱|みだ}さないために{自分|じぶん}の{意見|いけん}を{封|ふう}じたり{周囲|しゅうい}に{合|あ}わせたりする。'
	},
	['偏食']: {
		nameJp: '{偏食|へんしょく}',
		nameEn: 'Information Sampling Bias',
		label: '{見|み}えている{世界|せかい}の{偏|かたよ}り',
		summary:
			'{生存者|せいぞんしゃ}バイアスや{思|おも}い{出|だ}しやすさに{左右|さゆう}され、{手元|てもと}にある{一部|いちぶ}の{極端|きょくたん}なデータで{全体|ぜんたい}を{判断|はんだん}する。'
	}
};


type CoreMetadata = {
	nameJp: string;
	nameEn: string;
	label: string;
	summary: string;
};

export type CoreWithColor = CoreMetadata & {
	color: 'primary' | 'secondary' | 'gray';
};

export const CORE_INFO: Record<string, CoreMetadata> = {
	['内的制約']: {
		nameJp: '{内的制約|ないてきせいやく}',
		nameEn: 'Inherent Cognitive Constraints',
		label: 'システムの{限界|げんかい}',
		summary:
			'{脳|のう}のハードウェアとしての{制約|せいやく}。ワーキングメモリの{容量不足|ようりょうぶそく}や、{代謝|たいしゃ}エネルギーを{節約|せつやく}しようとする「{認知|にんち}のケチ（Cognitive Miser）」という{脳|のう}の{本能的|ほんのうてき}な{性質|せいしつ}を{指|さ}します。{常|つね}に{存在|そんざい}し、{思考|しこう}のショートカット（{引力|いんりょく}）を{生|う}む{土台|どだい}となります。'
	},
	['外的制約']: {
		nameJp: '{外的制約|がいてきせいやく}',
		nameEn: 'Environmental Pressures',
		label: '{状況|じょうきょう}の{負荷|ふか}',
		summary:
			'{外部環境|がいぶかんきょう}からかかる{心理的|しんりてき}・{物理的負荷|ぶつりてきふか}。{時間的余裕|じかんてきよゆう}のなさ（タイムプレッシャー）や、{処理|しょり}しきれない{情報|じょうほう}の{氾濫|はんらん}、{組織的|そしきてき}な{期待|きたい}などがこれに{該当|がいとう}します。{内的制約|ないてきせいやく}という{土台|どだい}に{対|たい}し、{引力|いんりょく}の{強度|きょうど}を{急激|きゅうげき}に{高|たか}めて{判断|はんだん}を{歪|ゆが}ませる{加速装置|かそくそうち}として{機能|きのう}します。'
	}
};
