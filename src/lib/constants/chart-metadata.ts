export type AxisMetadata = {
	zone: '<ruby>直感的<rt>ちょっかんてき</rt></ruby>' | '<ruby>論理的<rt>ろんりてき</rt></ruby>' | '<ruby>情報収集<rt>じょうほうしゅうしゅう</rt></ruby>' | '<ruby>意思決定<rt>いしけってい</rt></ruby>' | 'フラット';
	label: string;
	description: string;
};

export const X_PHASE_INFO = [
	{ range: [-10, -7], name: '生存本能・自動反応', energyLoad: '極小負荷' },
	{ range: [-6, -3], name: 'ヒューリスティック・省エネ処理', energyLoad: '軽度負荷' },
	{ range: [-2, 2], name: 'フラット・初期分析', energyLoad: 'ニュートラル' },
	{ range: [3, 6], name: '論理的補強・意味づけ', energyLoad: '中度負荷' },
	{ range: [7, 10], name: '過剰な正当化・執着', energyLoad: '極大負荷' }
];

// X軸の定義
export const X_AXIS_METADATA: Record<number, AxisMetadata> = {
	[-10]: {
		zone: '<ruby>直感的<rt>ちょっかんてき</rt></ruby>',
		label: '<ruby>純粋<rt>じゅんすい</rt></ruby>な<ruby>反射<rt>はんしゃ</rt></ruby>',
		description: '<ruby>生命維持<rt>せいめいいじ</rt></ruby>や<ruby>危機回避<rt>ききかいひ</rt></ruby>レベルの<ruby>完全<rt>かんぜん</rt></ruby>な<ruby>無意識反応<rt>むいしきはんのう</rt></ruby>。'
	},
	[-9]: {
		zone: '<ruby>直感的<rt>ちょっかんてき</rt></ruby>',
		label: '<ruby>感情的<rt>かんじょうてき</rt></ruby>フィルタリング',
		description:
			'<ruby>理屈<rt>りくつ</rt></ruby>よりも<ruby>先<rt>さき</rt></ruby>に「<ruby>好き<rt>す</rt></ruby>/<ruby>嫌い<rt>きら</rt></ruby>」「<ruby>快<rt>かい</rt></ruby>/<ruby>不快<rt>ふかい</rt></ruby>」という<ruby>強い<rt>つよ</rt></ruby><ruby>感情<rt>かんじょう</rt></ruby>が<ruby>湧き<rt>わ</rt></ruby>、<ruby>脳<rt>のう</rt></ruby>の<ruby>思考<rt>しこう</rt></ruby>を<ruby>即座<rt>そくざ</rt></ruby>に<ruby>決定<rt>けってい</rt></ruby>づける。'
	},
	[-8]: {
		zone: '<ruby>直感的<rt>ちょっかんてき</rt></ruby>',
		label: '<ruby>本能的<rt>ほんのうてき</rt></ruby>なパターン<ruby>認識<rt>にんしき</rt></ruby>',
		description:
			'<ruby>目立つ<rt>めだ</rt></ruby><ruby>特徴<rt>とくちょう</rt></ruby>（<ruby>権威<rt>けんい</rt></ruby>や<ruby>外見<rt>がいけん</rt></ruby>）や「<ruby>未知<rt>みち</rt></ruby>への<ruby>恐怖<rt>きょうふ</rt></ruby>」に<ruby>対し<rt>たい</rt></ruby>、<ruby>無意識<rt>むいしき</rt></ruby>に<ruby>反応<rt>はんのう</rt></ruby>して<ruby>思考<rt>しこう</rt></ruby>をロックする。'
	},
	[-7]: {
		zone: '<ruby>直感的<rt>ちょっかんてき</rt></ruby>',
		label: '<ruby>外部<rt>がいぶ</rt></ruby>シグナルへの<ruby>自動同調<rt>じどうどうちょう</rt></ruby>',
		description:
			'<ruby>最初<rt>さいしょ</rt></ruby>に<ruby>見た<rt>み</rt></ruby><ruby>数字<rt>すうじ</rt></ruby>や、<ruby>他者<rt>たしゃ</rt></ruby>の<ruby>群れ<rt>む</rt></ruby>（トレンド）など、<ruby>外部<rt>がいぶ</rt></ruby>の<ruby>分かり<rt>わ</rt></ruby>やすいシグナルに<ruby>自動<rt>じどう</rt></ruby>で<ruby>乗っかる<rt>の</rt></ruby>。'
	},
	[-6]: {
		zone: '<ruby>直感的<rt>ちょっかんてき</rt></ruby>',
		label: '<ruby>判断<rt>はんだん</rt></ruby>の<ruby>省略<rt>しょうりゃく</rt></ruby>・<ruby>手抜き<rt>てぬき</rt></ruby>',
		description:
			' <ruby>記憶<rt>きおく</rt></ruby>から<ruby>引き出し<rt>ひきだ</rt></ruby>やすいものだけを<ruby>使ったり<rt>つか</rt></ruby>、「やらない<ruby>方<rt>ほう</rt></ruby>がマシ」と<ruby>判断<rt>はんだん</rt></ruby>を<ruby>打ち切ったり<rt>うちき</rt></ruby>する。'
	},
	[-5]: {
		zone: '<ruby>直感的<rt>ちょっかんてき</rt></ruby>',
		label: '<ruby>表面的な<rt>ひょうめんてきな</rt></ruby><ruby>条件反射<rt>じょうけんはんしゃ</rt></ruby>',
		description: '「80%<ruby>成功<rt>せいこう</rt></ruby>」のような<ruby>表現<rt>ひょうげん</rt></ruby>の<ruby>表面的な<rt>ひょうめんてきな</rt></ruby><ruby>違い<rt>ちが</rt></ruby>だけで、<ruby>直感的<rt>ちょっかんてき</rt></ruby>に<ruby>飛びつく<rt>と</rt></ruby>。'
	},
	[-4]: {
		zone: '<ruby>直感的<rt>ちょっかんてき</rt></ruby>',
		label: '<ruby>結果論<rt>けっかろん</rt></ruby>によるつじつま<ruby>合わせ<rt>あ</rt></ruby>',
		description:
			' <ruby>結果<rt>けっか</rt></ruby>を<ruby>知って<rt>し</rt></ruby>から「<ruby>最初<rt>さいしょ</rt></ruby>からわかっていた」「<ruby>成功例<rt>せいこうれい</rt></ruby>が<ruby>全て<rt>すべて</rt></ruby>だ」と、<ruby>脳<rt>のう</rt></ruby>が<ruby>瞬時に<rt>しゅんじに</rt></ruby><ruby>記憶<rt>きおく</rt></ruby>や<ruby>認識<rt>にんしき</rt></ruby>を<ruby>上書き<rt>うわが</rt></ruby>し、<ruby>思考<rt>しこう</rt></ruby>を<ruby>終える<rt>お</rt></ruby>。'
	},
	[-3]: {
		zone: '<ruby>直感的<rt>ちょっかんてき</rt></ruby>',
		label: '<ruby>大雑把<rt>おおざっぱ</rt></ruby>な<ruby>推論<rt>すいろん</rt></ruby>',
		description: ' <ruby>過去<rt>かこ</rt></ruby>の<ruby>類似経験<rt>るいじけいけん</rt></ruby>から「おそらくこうだろう」と<ruby>推測<rt>すいそく</rt></ruby>し、それ<ruby>以上<rt>いじょう</rt></ruby>の<ruby>深い<rt>ふか</rt></ruby><ruby>思考<rt>しこう</rt></ruby>を<ruby>打ち切る<rt>うちき</rt></ruby>。'
	},
	[-2]: {
		zone: '<ruby>直感的<rt>ちょっかんてき</rt></ruby>',
		label: '<ruby>直感<rt>ちょっかん</rt></ruby>への<ruby>軽い<rt>かる</rt></ruby><ruby>疑い<rt>うたが</rt></ruby>',
		description: ' <ruby>直感的<rt>ちょっかんてき</rt></ruby>な<ruby>違和感<rt>いわかん</rt></ruby>に<ruby>対し<rt>たい</rt></ruby>、<ruby>少し<rt>すこ</rt></ruby>だけ「<ruby>本当<rt>ほんとう</rt></ruby>にそうか？」と<ruby>論理的<rt>ろんりてき</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しようとする。'
	},
	[-1]: {
		zone: '<ruby>直感的<rt>ちょっかんてき</rt></ruby>',
		label: '<ruby>事実<rt>じじつ</rt></ruby>の<ruby>単純分類<rt>たんじゅんぶんるい</rt></ruby>',
		description: ' <ruby>事実関係<rt>じじつかんけい</rt></ruby>をそのまま<ruby>受け止め<rt>う</rt></ruby>、ワーキングメモリを<ruby>軽く<rt>かる</rt></ruby><ruby>稼働<rt>かどう</rt></ruby>させて<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>整理<rt>せいり</rt></ruby>する。'
	},
	[0]: {
		zone: 'フラット',
		label: '<ruby>完全<rt>かんぜん</rt></ruby>ニュートラル',
		description:
			'バイアスがかかっていない、<ruby>事実<rt>じじつ</rt></ruby>を<ruby>客観的<rt>きゃっかんてき</rt></ruby>・フラットに<ruby>見つめ<rt>み</rt></ruby>、<ruby>等身大<rt>とうしんだい</rt></ruby>の<ruby>認知<rt>にんち</rt></ruby>をしている<ruby>理想的な<rt>りそうてきな</rt></ruby>ゼロ<ruby>地点<rt>ちてん</rt></ruby>。'
	},
	[1]: {
		zone: '<ruby>論理的<rt>ろんりてき</rt></ruby>',
		label: '<ruby>意図的な<rt>いとてきな</rt></ruby><ruby>問い立て<rt>といだ</rt></ruby>',
		description:
			'<ruby>事実<rt>じじつ</rt></ruby>に<ruby>対して<rt>たい</rt></ruby>「なぜこうなったのか？」「<ruby>他<rt>ほか</rt></ruby>の<ruby>可能性<rt>かのうせい</rt></ruby>はないか？」と<ruby>意図的<rt>いとてき</rt></ruby>に<ruby>脳<rt>のう</rt></ruby>のエンジンをかけ<ruby>始める<rt>はじ</rt></ruby>。'
	},
	[2]: {
		zone: '<ruby>論理的<rt>ろんりてき</rt></ruby>',
		label: '<ruby>論理的推論<rt>ろんりてきすいろん</rt></ruby>のスタート',
		description: ' <ruby>情報<rt>じょうほう</rt></ruby>を<ruby>構造化<rt>こうぞうか</rt></ruby>し、<ruby>因果関係<rt>いんがかんけい</rt></ruby>を<ruby>解き明かそ<rt>ときあか</rt></ruby>うと<ruby>思考<rt>しこう</rt></ruby>を<ruby>深め<rt>ふか</rt></ruby><ruby>始める<rt>はじ</rt></ruby>。'
	},
	[3]: {
		zone: '<ruby>論理的<rt>ろんりてき</rt></ruby>',
		label: '<ruby>仮説<rt>かせつ</rt></ruby>への<ruby>無意識<rt>むいしき</rt></ruby>の<ruby>加点<rt>かてん</rt></ruby>',
		description: '<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>分析<rt>ぶんせき</rt></ruby>する<ruby>中<rt>なか</rt></ruby>で、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>仮説<rt>かせつ</rt></ruby>や<ruby>前提<rt>ぜんてい</rt></ruby>に<ruby>合う<rt>あ</rt></ruby>ものを<ruby>少し<rt>すこ</rt></ruby>ずつ<ruby>高く<rt>たか</rt></ruby><ruby>評価<rt>ひょうか</rt></ruby>し<ruby>始める<rt>はじ</rt></ruby>。'
	},
	[4]: {
		zone: '<ruby>論理的<rt>ろんりてき</rt></ruby>',
		label: '<ruby>過剰な<rt>かじょうな</rt></ruby><ruby>解釈<rt>かいしゃく</rt></ruby>・<ruby>専門性<rt>せんもんせい</rt></ruby>の<ruby>罠<rt>わな</rt></ruby>',
		description: ' <ruby>自分<rt>じぶん</rt></ruby>の<ruby>持つ<rt>も</rt></ruby><ruby>知識<rt>ちしき</rt></ruby>や<ruby>専門性<rt>せんもんせい</rt></ruby>をベースに、<ruby>物事<rt>ものごと</rt></ruby>を<ruby>複雑<rt>ふくざつ</rt></ruby>に<ruby>解釈<rt>かいしゃく</rt></ruby>しすぎる。'
	},
	[5]: {
		zone: '<ruby>論理的<rt>ろんりてき</rt></ruby>',
		label: 'もっともらしい<ruby>理由<rt>りゆう</rt></ruby>のひねり<ruby>出し<rt>だ</rt></ruby>',
		description:
			' <ruby>因果関係<rt>いんがかんけい</rt></ruby>を<ruby>論理的<rt>ろんりてき</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>しようとして、「<ruby>相手<rt>あいて</rt></ruby>の<ruby>性格<rt>せいかく</rt></ruby>のせいだ」「この<ruby>計画<rt>けいかく</rt></ruby>は<ruby>完璧<rt>かんぺき</rt></ruby>だ」と、<ruby>頭<rt>あたま</rt></ruby>を<ruby>使って<rt>つか</rt></ruby><ruby>理由<rt>りゆう</rt></ruby>を<ruby>作り出す<rt>つくりだ</rt></ruby>。'
	},
	[6]: {
		zone: '<ruby>論理的<rt>ろんりてき</rt></ruby>',
		label: '<ruby>自己正当化<rt>じこせいとうか</rt></ruby>の<ruby>論理補強<rt>ろんりほきょう</rt></ruby>',
		description:
			' <ruby>自分<rt>じぶん</rt></ruby>が<ruby>立てた<rt>た</rt></ruby><ruby>仮説<rt>かせつ</rt></ruby>や<ruby>過去<rt>かこ</rt></ruby>の<ruby>決定<rt>けってい</rt></ruby>が<ruby>正しい<rt>ただ</rt></ruby>ことを<ruby>証明<rt>しょうめい</rt></ruby>するために、<ruby>脳<rt>のう</rt></ruby>のリソースを<ruby>使って<rt>つか</rt></ruby><ruby>理論武装<rt>りろんぶそう</rt></ruby>し<ruby>始める<rt>はじ</rt></ruby>。'
	},
	[7]: {
		zone: '<ruby>論理的<rt>ろんりてき</rt></ruby>',
		label: '<ruby>過剰な<rt>かじょうな</rt></ruby><ruby>価値づけ<rt>かち</rt></ruby>・<ruby>推論<rt>すいろん</rt></ruby>の<ruby>暴走<rt>ぼうそう</rt></ruby>',
		description:
			'<ruby>他者<rt>たしゃ</rt></ruby>の<ruby>心理<rt>しんり</rt></ruby>を<ruby>深読み<rt>ふかよ</rt></ruby>しすぎたり、<ruby>自分<rt>じぶん</rt></ruby>が<ruby>苦労<rt>くろう</rt></ruby>して<ruby>作った<rt>つく</rt></ruby>プロセスの<ruby>価値<rt>かち</rt></ruby>を<ruby>論理的<rt>ろんりてき</rt></ruby>に<ruby>過大評価<rt>かだいひょうか</rt></ruby>する。'
	},
	[8]: {
		zone: '<ruby>論理的<rt>ろんりてき</rt></ruby>',
		label: '<ruby>投資回収<rt>とうしかいしゅう</rt></ruby>のための<ruby>精緻な<rt>せいち</rt></ruby><ruby>理論構築<rt>りろんこうちく</rt></ruby>',
		description:
			'<ruby>過去<rt>かこ</rt></ruby>の<ruby>多大な<rt>ただい</rt></ruby><ruby>投資<rt>とうし</rt></ruby>（<ruby>金<rt>かね</rt></ruby>・<ruby>時間<rt>じかん</rt></ruby>）や<ruby>労力<rt>ろうりょく</rt></ruby>を<ruby>正当化<rt>せいとうか</rt></ruby>するため、<ruby>執念深く<rt>しゅうねんぶか</rt></ruby>データを<ruby>集め<rt>あつ</rt></ruby>、<ruby>精緻な<rt>せいち</rt></ruby>シミュレーションを<ruby>構築<rt>こうちく</rt></ruby>する。'
	},
	[9]: {
		zone: '<ruby>論理的<rt>ろんりてき</rt></ruby>',
		label: '<ruby>撤退<rt>てったい</rt></ruby>しないための<ruby>高度な<rt>こうど</rt></ruby><ruby>理屈<rt>りくつ</rt></ruby>こね',
		description:
			' <ruby>客観的<rt>きゃっかんてき</rt></ruby>には<ruby>破綻<rt>はたん</rt></ruby>している<ruby>状況<rt>じょうきょう</rt></ruby>でも、<ruby>複雑な<rt>ふくざつな</rt></ruby><ruby>要因<rt>よういん</rt></ruby>を<ruby>絡め合わせて<rt>から</rt></ruby>「<ruby>今<rt>いま</rt></ruby>はまだ<ruby>撤退<rt>てったい</rt></ruby>すべきでない<ruby>高度な<rt>こうどな</rt></ruby><ruby>理由<rt>りゆう</rt></ruby>」をひねり<ruby>出す<rt>だ</rt></ruby>。'
	},
	[10]: {
		zone: '<ruby>論理的<rt>ろんりてき</rt></ruby>',
		label: '<ruby>完璧な<rt>かんぺきな</rt></ruby><ruby>自己欺瞞<rt>じこぎまん</rt></ruby>の<ruby>完成<rt>かんせい</rt></ruby>',
		description:
			' <ruby>完全<rt>かんぜん</rt></ruby>に<ruby>歪んだ<rt>ゆが</rt></ruby><ruby>前提<rt>ぜんてい</rt></ruby>のともとで、<ruby>完璧な<rt>かんぺきな</rt></ruby><ruby>論理的整合性<rt>ろんりてきせいごうせい</rt></ruby>を（<ruby>自分<rt>じぶん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>だけで）<ruby>作り上げて<rt>つくりあ</rt></ruby>まい、どんな<ruby>反論<rt>はんろん</rt></ruby>も<ruby>高度な<rt>こうどな</rt></ruby><ruby>理屈<rt>りくつ</rt></ruby>で<ruby>跳ね返す<rt>は</rt></ruby><ruby>究極<rt>きゅうきょく</rt></ruby>の<ruby>熟考状態<rt>じゅっこうじょうたい</rt></ruby>。'
	}
};


export const Y_PHASE_INFO = [
	{ range: [-10, -7], name: '知覚・収集', alias: '純粋なInput' },
	{ range: [-6, -3], name: '解釈・意味づけ', alias: 'Inputの内部加工' },
	{ range: [-2, 2], name: '転換・選択肢生成', alias: 'InputとOutputの境界点' },
	{ range: [3, 6], name: '比較・評価', alias: 'Outputの準備' },
	{ range: [7, 10], name: '決定・実行', alias: '純粋なOutput' }
];

// Y軸の定義
export const Y_AXIS_METADATA: Record<number, AxisMetadata> = {
	[-10]: {
		zone: '<ruby>情報収集<rt>じょうほうしゅうしゅう</rt></ruby>',
		label: '<ruby>無意識<rt>むいしき</rt></ruby>の<ruby>知覚<rt>ちかく</rt></ruby>',
		description:
			'<ruby>情報<rt>じょうほう</rt></ruby>の<ruby>顕著性<rt>けんちょせい</rt></ruby>に<ruby>基<rt>もと</rt></ruby>づく<ruby>初期<rt>しょき</rt></ruby>フィルタリング。（<ruby>例<rt>れい</rt></ruby>：<ruby>目立<rt>めだ</rt></ruby>つ<ruby>情報<rt>じょうほう</rt></ruby>や<ruby>自分<rt>じぶん</rt></ruby>に<ruby>関係<rt>かんけい</rt></ruby>しそうな<ruby>音<rt>おと</rt></ruby>・<ruby>視覚情報<rt>しかくじょうほう</rt></ruby>だけを<ruby>拾<rt>ひろ</rt></ruby>う）'
	},
	[-9]: {
		zone: '<ruby>情報収集<rt>じょうほうしゅうしゅう</rt></ruby>',
		label: '<ruby>感情<rt>かんじょう</rt></ruby>・<ruby>本能<rt>ほんのう</rt></ruby>による<ruby>選別<rt>せんべつ</rt></ruby>',
		description: '<ruby>論理<rt>ろんり</rt></ruby>より<ruby>先<rt>さき</rt></ruby>に「<ruby>快<rt>かい</rt></ruby>/<ruby>不快<rt>ふかい</rt></ruby>」「<ruby>好<rt>す</rt></ruby>き/<ruby>嫌<rt>きら</rt></ruby>い」が<ruby>発動<rt>はつどう</rt></ruby>し、<ruby>情報<rt>じょうほう</rt></ruby>への<ruby>扉<rt>とびら</rt></ruby>を<ruby>開閉<rt>かいへい</rt></ruby>する。'
	},
	[-8]: {
		zone: '<ruby>情報収集<rt>じょうほうしゅうしゅう</rt></ruby>',
		label: '<ruby>意識的<rt>いしきてき</rt></ruby>な<ruby>注目<rt>ちゅうもく</rt></ruby>',
		description:
			'<ruby>特定<rt>とくてい</rt></ruby>の<ruby>特徴<rt>とくちょう</rt></ruby>にだけフォーカスを<ruby>絞<rt>しぼ</rt></ruby>り、それ<ruby>以外<rt>いがい</rt></ruby>を<ruby>視野<rt>しや</rt></ruby>から<ruby>外<rt>はず</rt></ruby>す。（<ruby>例<rt>れい</rt></ruby>：<ruby>目立<rt>めだ</rt></ruby>っている<ruby>一要素<rt>いちようそ</rt></ruby>だけの<ruby>過大評価<rt>かだいひょうか</rt></ruby>）'
	},
	[-7]: {
		zone: '<ruby>情報収集<rt>じょうほうしゅうしゅう</rt></ruby>',
		label: '<ruby>情報<rt>じょうほう</rt></ruby>の<ruby>収集<rt>しゅうしゅう</rt></ruby>',
		description:
			' <ruby>注目<rt>ちゅうもく</rt></ruby>した<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>裏付<rt>うらづ</rt></ruby>けるための<ruby>証拠集<rt>しょうこあつ</rt></ruby>めを<ruby>開始<rt>かいし</rt></ruby>する。（<ruby>例<rt>れい</rt></ruby>：<ruby>自分<rt>じぶん</rt></ruby>に<ruby>都合<rt>つごう</rt></ruby>の<ruby>良<rt>よ</rt></ruby>い<ruby>事実<rt>じじつ</rt></ruby>だけの<ruby>収集<rt>しゅうしゅう</rt></ruby>）'
	},
	[-6]: {
		zone: '<ruby>情報収集<rt>じょうほうしゅうしゅう</rt></ruby>',
		label: '<ruby>前提<rt>ぜんてい</rt></ruby>の<ruby>固定<rt>こてい</rt></ruby>',
		description:
			'<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>測<rt>はか</rt></ruby>るための「<ruby>最初<rt>さいしょ</rt></ruby>のモノサシ」を<ruby>無意識<rt>むいしき</rt></ruby>に<ruby>設定<rt>せってい</rt></ruby>する。（<ruby>例<rt>れい</rt></ruby>：<ruby>初期値<rt>しょきち</rt></ruby>への<ruby>引<rt>ひ</rt></ruby>っぱられ）'
	},
	[-5]: {
		zone: '<ruby>情報収集<rt>じょうほうしゅうしゅう</rt></ruby>',
		label: '<ruby>全体像<rt>ぜんたいぞう</rt></ruby>の<ruby>錯覚<rt>さっかく</rt></ruby>',
		description: '<ruby>手元<rt>てもと</rt></ruby>にある<ruby>見<rt>み</rt></ruby>えている<ruby>情報<rt>じょうほう</rt></ruby>だけで「これが<ruby>全<rt>すべ</rt></ruby>てだ」と<ruby>判断<rt>はんだん</rt></ruby>し、<ruby>見<rt>み</rt></ruby>えない<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>無視<rt>むし</rt></ruby>する。'
	},
	[-4]: {
		zone: '<ruby>情報収集<rt>じょうほうしゅうしゅう</rt></ruby>',
		label: '<ruby>状況<rt>じょうきょう</rt></ruby>の<ruby>評価<rt>ひょうか</rt></ruby>',
		description:
			'<ruby>情報<rt>じょうほう</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>を<ruby>解釈<rt>かいしゃく</rt></ruby>し、<ruby>対象<rt>たいしょう</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>や<ruby>原因<rt>げんいん</rt></ruby>を<ruby>決<rt>き</rt></ruby>めつける。（<ruby>例<rt>れい</rt></ruby>：<ruby>一部<rt>いちぶ</rt></ruby>の<ruby>印象<rt>いんしょう</rt></ruby>からの<ruby>全体評価<rt>ぜんたいひょうか</rt></ruby>や<ruby>他者<rt>たしゃ</rt></ruby>への<ruby>責任転嫁<rt>せきにんてんか</rt></ruby>）'
	},
	[-3]: {
		zone: '<ruby>情報収集<rt>じょうほうしゅうしゅう</rt></ruby>',
		label: '<ruby>予測<rt>よそく</rt></ruby>・<ruby>推論<rt>すいろん</rt></ruby>',
		description:
			'<ruby>限定的<rt>げんていてき</rt></ruby>な<ruby>情報<rt>じょうほう</rt></ruby>から、パターンの<ruby>類似性<rt>るいじせい</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>見<rt>み</rt></ruby>えない<ruby>部分<rt>ぶぶん</rt></ruby>を<ruby>埋<rt>う</rt></ruby>める。（<ruby>例<rt>れい</rt></ruby>：「<ruby>典型的な<rt>てんけいてきな</rt></ruby>パターンだからこうなるはずだ」という<ruby>思<rt>おも</rt></ruby>い<ruby>込<rt>こ</rt></ruby>み）'
	},
	[-2]: {
		zone: '<ruby>情報収集<rt>じょうほうしゅうしゅう</rt></ruby>',
		label: '<ruby>自己完結的<rt>じこかんけつてき</rt></ruby>な<ruby>前提<rt>ぜんてい</rt></ruby>の<ruby>統合<rt>とうごう</rt></ruby>',
		description: '<ruby>解釈<rt>かいしゃく</rt></ruby>した<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>自身<rt>じしん</rt></ruby>の<ruby>常識<rt>じょうしき</rt></ruby>と<ruby>同化<rt>どうか</rt></ruby>させ、「<ruby>他人も同じ認識のはずだ<rt>たにんもおなじにんしきのはずだ</rt></ruby>」と<ruby>信<rt>しん</rt></ruby>じ<ruby>込<rt>こ</rt></ruby>む。'
	},
	[-1]: {
		zone: '<ruby>情報収集<rt>じょうほうしゅうしゅう</rt></ruby>',
		label: '<ruby>課題<rt>かだい</rt></ruby>の<ruby>定義<rt>ていぎ</rt></ruby>',
		description:
			'「これが<ruby>解決<rt>かいけつ</rt></ruby>すべき<ruby>問題<rt>もんだい</rt></ruby>だ」と<ruby>最終的<rt>さいしゅうてき</rt></ruby>に<ruby>特定<rt>とくてい</rt></ruby>するInputの<ruby>終着点<rt>しゅうちゃくてん</rt></ruby>。（<ruby>例<rt>れい</rt></ruby>：<ruby>自分<rt>じぶん</rt></ruby>の<ruby>得意<rt>とくい</rt></ruby>な<ruby>手段<rt>しゅだん</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わせて<ruby>問題<rt>もんだい</rt></ruby>を<ruby>定義<rt>ていぎ</rt></ruby>してしまう<ruby>現象<rt>げんしょう</rt></ruby>）'
	},
	[0]: {
		zone: 'フラット',
		label: '<ruby>認知的空白<rt>にんちてきくうはく</rt></ruby> / ニュートラル',
		description:
			'システム2（<ruby>熟慮<rt>じゅくりょ</rt></ruby>）を<ruby>意識的<rt>いしきてき</rt></ruby>に<ruby>起動<rt>きどう</rt></ruby>させない<ruby>限<rt>かぎ</rt></ruby>り<ruby>維持<rt>いじ</rt></ruby>できない、フラットな<ruby>状態<rt>じょうたい</rt></ruby>。（※<ruby>人間<rt>にんげん</rt></ruby>は<ruby>通常<rt>つうじょう</rt></ruby>ここをスキップする）'
	},
	[1]: {
		zone: '<ruby>意思決定<rt>いしけってい</rt></ruby>',
		label: '<ruby>選択肢<rt>せんたくし</rt></ruby>の<ruby>生成<rt>せいせい</rt></ruby>',
		description:
			'：<ruby>解決策<rt>かいけつさく</rt></ruby>のアイデアをリストアップし<ruby>始<rt>はじ</rt></ruby>めるOutputの<ruby>起点<rt>きてん</rt></ruby>。（<ruby>例<rt>れい</rt></ruby>：<ruby>記憶<rt>きおく</rt></ruby>から<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>しやすいアイデアの<ruby>優先的<rt>ゆうせんてき</rt></ruby>な<ruby>列挙<rt>れっきょ</rt></ruby>）'
	},
	[2]: {
		zone: '<ruby>意思決定<rt>いしけってい</rt></ruby>',
		label: '<ruby>仮説<rt>かせつ</rt></ruby>の<ruby>仮決<rt>かりぎめ</rt></ruby>め',
		description:
			' <ruby>複数<rt>ふくすう</rt></ruby>ある<ruby>選択肢<rt>せんたくし</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で、「おそらくこれが<ruby>正解<rt>せいかい</rt></ruby>だろう」と<ruby>直感的<rt>ちょっかんてき</rt></ruby>にアタリをつける。（<ruby>例<rt>れい</rt></ruby>：「いつも<ruby>通<rt>どお</rt></ruby>り」や「<ruby>無難<rt>ぶなん</rt></ruby>な<ruby>案<rt>あん</rt></ruby>」への<ruby>無意識<rt>むいしき</rt></ruby>の<ruby>傾倒<rt>けいとう</rt></ruby>）'
	},
	[3]: {
		zone: '<ruby>意思決定<rt>いしけってい</rt></ruby>',
		label: '<ruby>選択肢<rt>せんたくし</rt></ruby>への<ruby>重<rt>おも</rt></ruby>みづけ',
		description:
			'：<ruby>自分<rt>じぶん</rt></ruby>が<ruby>仮決<rt>かりぎ</rt></ruby>めした、または<ruby>自<rt>みずか</rt></ruby>ら<ruby>発案<rt>はつあん</rt></ruby>した<ruby>選択肢<rt>せんたくし</rt></ruby>に<ruby>対<rt>たい</rt></ruby>し、<ruby>客観的価値以上<rt>きゃっかんてきかちいじょう</rt></ruby>の<ruby>愛着<rt>あいちゃく</rt></ruby>を<ruby>持<rt>も</rt></ruby>ちはじめる。'
	},
	[4]: {
		zone: '<ruby>意思決定<rt>いしけってい</rt></ruby>',
		label: 'ストーリーの<ruby>構築<rt>こうちく</rt></ruby>',
		description:
			'その<ruby>選択肢<rt>せんたくし</rt></ruby>を<ruby>選<rt>えら</rt></ruby>んだ<ruby>場合<rt>ばあい</rt></ruby>の<ruby>成功<rt>せいこう</rt></ruby>シナリオを、もっともらしい<ruby>物語<rt>ものがたり</rt></ruby>として<ruby>過大評価<rt>かだいひょうか</rt></ruby>する。（<ruby>例<rt>れい</rt></ruby>：<ruby>具体的<rt>ぐたいてき</rt></ruby>で<ruby>劇的<rt>げきてき</rt></ruby>なシナリオほど<ruby>確率<rt>かくりつ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いと<ruby>錯覚<rt>さっかく</rt></ruby>する<ruby>現象<rt>げんしょう</rt></ruby>）'
	},
	[5]: {
		zone: '<ruby>意思決定<rt>いしけってい</rt></ruby>',
		label: 'リスク・メリットの<ruby>比較<rt>ひかく</rt></ruby>',
		description:
			'<ruby>各選択肢<rt>かくせんたくし</rt></ruby>の<ruby>損得<rt>そんとく</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>する<ruby>際<rt>さい</rt></ruby>、<ruby>失<rt>うしな</rt></ruby>う<ruby>恐怖<rt>きょうふ</rt></ruby>を<ruby>過大<rt>かだい</rt></ruby>に<ruby>見積<rt>みつ</rt></ruby>もり、<ruby>安全<rt>あんぜん</rt></ruby>な（あるいは<ruby>特定<rt>とくてい</rt></ruby>の）<ruby>選択<rt>せんたく</rt></ruby>を<ruby>正当化<rt>せいとうか</rt></ruby>する。'
	},
	[6]: {
		zone: '<ruby>意思決定<rt>いしけってい</rt></ruby>',
		label: '<ruby>表現<rt>ひょうげん</rt></ruby>による<ruby>評価<rt>ひょうか</rt></ruby>の<ruby>確定<rt>かくてい</rt></ruby>',
		description:
			'：<ruby>最終的<rt>さいしゅうてき</rt></ruby>な<ruby>比較<rt>ひかく</rt></ruby>において、<ruby>選択肢<rt>せんたくし</rt></ruby>がどう<ruby>見<rt>み</rt></ruby>せられているか（フレーム）で<ruby>評価<rt>ひょうか</rt></ruby>を<ruby>決定<rt>けってい</rt></ruby>づける。（<ruby>例<rt>れい</rt></ruby>：「80%の<ruby>成功率<rt>せいこうりつ</rt></ruby>」という<ruby>見<rt>み</rt></ruby>せ<ruby>方<rt>かた</rt></ruby>への<ruby>安心<rt>あんしん</rt></ruby>）'
	},
	[7]: {
		zone: '<ruby>意思決定<rt>いしけってい</rt></ruby>',
		label: '<ruby>意思<rt>いし</rt></ruby>の<ruby>確定<rt>かくてい</rt></ruby>',
		description:
			'「これにする」と<ruby>結論<rt>けつろん</rt></ruby>を<ruby>出<rt>だ</rt></ruby>し、<ruby>他者<rt>たしゃ</rt></ruby>の<ruby>動向<rt>どうこう</rt></ruby>を<ruby>材料<rt>ざいりょう</rt></ruby>にして<ruby>決断<rt>けつだん</rt></ruby>を<ruby>強固<rt>きょうこ</rt></ruby>にする。（<ruby>例<rt>れい</rt></ruby>：「みんなもやっているから<ruby>間違<rt>まちが</rt></ruby>いない」という<ruby>確信<rt>かくしん</rt></ruby>）'
	},
	[8]: {
		zone: '<ruby>意思決定<rt>いしけってい</rt></ruby>',
		label: '<ruby>行動<rt>こうどう</rt></ruby>の<ruby>選択<rt>せんたく</rt></ruby>・<ruby>投資<rt>とうし</rt></ruby>',
		description:
			'：<ruby>実際<rt>じっさい</rt></ruby>にリソース（<ruby>時間<rt>じかん</rt></ruby>・<ruby>金<rt>かね</rt></ruby>・<ruby>労力<rt>ろうりょく</rt></ruby>）を<ruby>投下<rt>とうか</rt></ruby>し<ruby>始<rt>はじ</rt></ruby>める。（<ruby>例<rt>れい</rt></ruby>：<ruby>投下<rt>とうか</rt></ruby>したコストが<ruby>意思決定<rt>いしけってい</rt></ruby>を<ruby>縛<rt>しば</rt></ruby>りはじめる<ruby>初期段階<rt>しょきだんかい</rt></ruby>）'
	},
	[9]: {
		zone: '<ruby>意思決定<rt>いしけってい</rt></ruby>',
		label: '<ruby>実行<rt>じっこう</rt></ruby>へのコミット',
		description:
			'<ruby>自<rt>みずか</rt></ruby>らの<ruby>能力<rt>のうりょく</rt></ruby>や<ruby>状況<rt>じょうきょう</rt></ruby>を<ruby>過信<rt>かしん</rt></ruby>し、スケジュールやリスクを<ruby>度外視<rt>どがいし</rt></ruby>して<ruby>実行<rt>じっこう</rt></ruby>にのめり<ruby>込<rt>こ</rt></ruby>む。（<ruby>例<rt>れい</rt></ruby>：「<ruby>自分<rt>じぶん</rt></ruby>なら<ruby>上手<rt>うま</rt></ruby>くやれる」という<ruby>盲信<rt>もうしん</rt></ruby>）'
	},
	[10]: {
		zone: '<ruby>意思決定<rt>いしけってい</rt></ruby>',
		label: '<ruby>行動<rt>こうどう</rt></ruby>の<ruby>固守<rt>こしゅ</rt></ruby>',
		description:
			'<ruby>状況<rt>じょうきょう</rt></ruby>が<ruby>悪化<rt>あっか</rt></ruby>しても、<ruby>決定<rt>けってい</rt></ruby>した<ruby>行動<rt>こうどう</rt></ruby>を<ruby>何<rt>なに</rt></ruby>があっても<ruby>変<rt>か</rt></ruby>えない<ruby>究極<rt>きゅうきょく</rt></ruby>の<ruby>出力状態<rt>しゅつりょくじょうたい</rt></ruby>。（<ruby>例<rt>れい</rt></ruby>：<ruby>自<rt>みずか</rt></ruby>らの<ruby>過<rt>あやま</rt></ruby>ちを<ruby>認<rt>みと</rt></ruby>める<ruby>精神的苦痛<rt>せいしんてきくつう</rt></ruby>を<ruby>避<rt>さ</rt></ruby>けるための<ruby>暴走<rt>ぼうそう</rt></ruby>）'
	}
};


interface Range {
	min: number;
	max: number;
}

interface EvaluationContent {
	nameJp: string;
	summary: string;
}

interface EvaluationMaster extends EvaluationContent {
	rangeX: Range;
	rangeY: Range;
}

// 2. マスターデータの定義
export const EVALUATION_LIST: EvaluationMaster[] = [
	{
		rangeX: { min: -10, max: -1 },
		rangeY: { min: -10, max: -1 },
		nameJp: "<ruby>第<rt>だい</rt>一<rt>いっ</rt>印<rt>いん</rt>象<rt>しょう</rt></ruby>",
		summary: "<ruby>脳<rt>のう</rt></ruby>が<ruby>省<rt>しょう</rt></ruby>エネ<ruby>状<rt>じょう</rt>態<rt>たい</rt></ruby>のまま、<ruby>情<rt>じょう</rt>報<rt>ほう</rt></ruby>の<ruby>入<rt>い</rt></ruby>り<ruby>口<rt>ぐち</rt></ruby>で<ruby>判<rt>はん</rt>断<rt>だん</rt></ruby>を<ruby>下<rt>くだ</rt></ruby>してしまう<ruby>領<rt>りょう</rt>域<rt>いき</rt></ruby>。ハロー<ruby>効<rt>こう</rt>果<rt>か</rt></ruby>やアンカリングにより、<ruby>目<rt>め</rt></ruby><ruby>立<rt>だ</rt></ruby>つ<ruby>情<rt>じょう</rt>報<rt>ほう</rt></ruby>や<ruby>初<rt>しょ</rt>期<rt>き</rt>値<rt>ち</rt></ruby>といった「<ruby>第<rt>だい</rt>一<rt>いっ</rt>印<rt>いん</rt>象<rt>しょう</rt></ruby>」が<ruby>事<rt>じ</rt>実<rt>じつ</rt></ruby>を<ruby>塗<rt>ぬ</rt></ruby>り<ruby>替<rt>か</rt></ruby>えてしまう。これは「<ruby>怠<rt>たい</rt>惰<rt>だ</rt></ruby>による<ruby>過<rt>か</rt>失<rt>しつ</rt></ruby>」であり、<ruby>意<rt>い</rt>識<rt>しき</rt></ruby><ruby>的<rt>てき</rt></ruby>にデータを<ruby>再<rt>さい</rt>確<rt>かく</rt>認<rt>にん</rt></ruby>することで<ruby>修<rt>しゅう</rt>正<rt>せい</rt></ruby><ruby>可<rt>か</rt>能<rt>のう</rt></ruby>な、<ruby>比<rt>ひ</rt>較<rt>かく</rt>的<rt>てき</rt></ruby><ruby>軽<rt>けい</rt>微<rt>び</rt></ruby>なバイアス。"
	},
	{
		rangeX: { min: -10, max: -1 },
		rangeY: { min: 1, max: 10 },
		nameJp: "<ruby>省<rt>しょう</rt></ruby>エネ<ruby>判<rt>はん</rt>断<rt>だん</rt></ruby>",
		summary: "<ruby>変<rt>へん</rt>化<rt>か</rt></ruby>に<ruby>伴<rt>ともな</rt></ruby>う<ruby>脳<rt>のう</rt></ruby>の<ruby>負<rt>ふ</rt>荷<rt>か</rt></ruby>を<ruby>嫌<rt>きら</rt></ruby>い、<ruby>現<rt>げん</rt>状<rt>じょう</rt>維<rt>い</rt>持<rt>じ</rt></ruby>バイアスや<ruby>感<rt>かん</rt>情<rt>じょう</rt></ruby>ヒューリスティックに<ruby>身<rt>み</rt></ruby>を<ruby>任<rt>まか</rt></ruby>せて<ruby>決<rt>けつ</rt>断<rt>だん</rt></ruby>する<ruby>領<rt>りょう</rt>域<rt>いき</rt></ruby>。<ruby>論<rt>ろん</rt>理<rt>り</rt>的<rt>てき</rt>検<rt>けん</rt>討<rt>とう</rt></ruby>を<ruby>放<rt>ほう</rt>棄<rt>き</rt></ruby>した「とりあえず<ruby>今<rt>いま</rt></ruby>まで<ruby>通<rt>どお</rt></ruby>り」「<ruby>何<rt>な</rt></ruby>となくやらない」という<ruby>選<rt>せん</rt>択<rt>たく</rt></ruby>は、<ruby>組<rt>そ</rt>織<rt>しき</rt></ruby>の<ruby>成<rt>せい</rt>長<rt>ちょう</rt>機<rt>き</rt>会<rt>かい</rt></ruby>を<ruby>奪<rt>うば</rt></ruby>う「<ruby>無<rt>む</rt>作<rt>さく</rt>為<rt>い</rt></ruby>の<ruby>過失<rt>かしつ</rt></ruby>」となる。"
	},
	{
		rangeX: { min: 1, max: 10 },
		rangeY: { min: -10, max: -1 },
		nameJp: "<ruby>偏<rt>かたよ</rt></ruby>った<ruby>分<rt>ぶん</rt>析<rt>せき</rt></ruby>",
		summary: "<ruby>熱<rt>ねっ</rt>心<rt>しん</rt></ruby>な<ruby>調<rt>ちょう</rt>査<rt>さ</rt></ruby>・<ruby>分<rt>ぶん</rt>析<rt>せき</rt></ruby>を<ruby>装<rt>よそお</rt></ruby>いながら、<ruby>実<rt>じっ</rt>態<rt>たい</rt></ruby>は<ruby>自<rt>じ</rt>分<rt>ぶん</rt></ruby>の<ruby>仮<rt>か</rt>説<rt>せつ</rt></ruby>に<ruby>合<rt>あ</rt></ruby>うデータのみを<ruby>精<rt>せい</rt>緻<rt>ち</rt></ruby>に<ruby>収<rt>しゅう</rt>集<rt>しゅう</rt></ruby>・<ruby>解<rt>かい</rt>釈<rt>しゃく</rt></ruby>してしまう<ruby>領<rt>りょう</rt>域<rt>いき</rt></ruby>。<ruby>本<rt>ほん</rt>にん</ruby>は「<ruby>論<rt>ろん</rt>理<rt>り</rt>的<rt>てき</rt></ruby>かつ<ruby>客<rt>きゃく</rt>観<rt>かん</rt>的<rt>てき</rt></ruby>である」と<ruby>信<rt>しん</rt></ruby>じ<ruby>込<rt>こ</rt></ruby>んでいるため、<ruby>歪<rt>ゆが</rt></ruby>んだ<ruby>前<rt>ぜん</rt>提<rt>てい</rt></ruby>が<ruby>高<rt>こう</rt>度<rt>ど</rt></ruby>な<ruby>分<rt>ぶん</rt>析<rt>せき</rt></ruby>によってさらに<ruby>強<rt>きょう</rt>化<rt>か</rt></ruby>されてしまう<ruby>危<rt>あや</rt></ruby>うさを<ruby>持<rt>も</rt></ruby>つ。"
	},
	{
		rangeX: { min: 1, max: 10 },
		rangeY: { min: 1, max: 10 },
		nameJp: "<ruby>執<rt>しゅう</rt>着<rt>ちゃく</rt></ruby>",
		summary: "<ruby>４<rt>よん</rt></ruby>つの中で<ruby>最<rt>もっと</rt></ruby>も<ruby>致<rt>ち</rt>命<rt>めい</rt>的<rt>てき</rt></ruby>な<ruby>領<rt>りょう</rt>域<rt>いき</rt></ruby>。サンクコストや<ruby>自<rt>みずか</rt></ruby>らのプライドを<ruby>守<rt>まも</rt></ruby>るため、<ruby>脳<rt>のう</rt></ruby>の<ruby>論<rt>ろん</rt>理<rt>り</rt>的<rt>てき</rt>思<rt>し</rt>考<rt>こう</rt>能<rt>のう</rt>力<rt>りょく</rt></ruby>をフル<ruby>回<rt>かい</rt>転<rt>てん</rt></ruby>させて「<ruby>撤<rt>てっ</rt>退<rt>たい</rt></ruby>しないための<ruby>高<rt>こう</rt>度<rt>ど</rt></ruby>な<ruby>理<rt>り</rt>屈<rt>くつ</rt></ruby>」を<ruby>構<rt>こう</rt>築<rt>ちく</rt></ruby>する。<ruby>不<rt>ふ</rt>合<rt>ごう</rt>理<rt>り</rt></ruby>な<ruby>決<rt>けつ</rt>断<rt>だん</rt></ruby>を<ruby>緻<rt>ち</rt>密<rt>みつ</rt></ruby>なシミュレーションによって<ruby>強<rt>ごう</rt>引<rt>いん</rt></ruby>に<ruby>正<rt>せい</rt>当<rt>とう</rt>化<rt>か</rt></ruby>し、<ruby>致<rt>ち</rt>命<rt>めい</rt>傷<rt>しょう</rt></ruby>を<ruby>負<rt>お</rt></ruby>うまで<ruby>暴<rt>ぼう</rt>走<rt>そう</rt></ruby>を<ruby>続<rt>つづ</rt></ruby>けてしまう。"
	},
];
