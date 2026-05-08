<script lang="ts">
	import { Tooltip } from "flowbite-svelte";

	let {}: {} = $props();

	const CanvasWidth = 360;
	const CanvasHeight = 680;
	const CenterX = CanvasWidth / 2;

	// --- 共通設定 ---
	const RY = 8; // 円筒の丸み
	const ARROW_ID = "arrow-head";

	// 内部モデル
	const INTERNAL_MODEL_W = 120;
	const INTERNAL_MODEL_H = 60;
	const INTERNAL_MODEL_X = CenterX + 90 - INTERNAL_MODEL_W / 2;
	const INTERNAL_MODEL_Y = 20; 

	// 仮説
	const HYPOTHESIS_W = 130;
	const HYPOTHESIS_H = 60;
	const HYPOTHESIS_X = CenterX + 90 - HYPOTHESIS_W / 2;
	const HYPOTHESIS_Y = INTERNAL_MODEL_Y + INTERNAL_MODEL_H + 50;

	// 5. 外界
	const WORLD_W = 120;
	const WORLD_H = 60;
	const WORLD_X = CenterX - 90 - WORLD_W / 2;
	const WORLD_Y = HYPOTHESIS_Y;

	// 感覚受容
	const SENSORY_RECEPTION_W = 130;
	const SENSORY_RECEPTION_H = 60;
	const SENSORY_RECEPTION_X = CenterX - 90 - SENSORY_RECEPTION_W / 2;
	const SENSORY_RECEPTION_Y = HYPOTHESIS_Y + HYPOTHESIS_H + 40;

	// 予測生成
	const TOP_DOWN_PREDICTION_W = 130;
	const TOP_DOWN_PREDICTION_H = 60;
	const TOP_DOWN_PREDICTION_X = CenterX + 90 - TOP_DOWN_PREDICTION_W / 2;
	const TOP_DOWN_PREDICTION_Y = HYPOTHESIS_Y + HYPOTHESIS_H + 40;

	// 予測誤差計算
	const CALC_W = 130;
	const CALC_H = 60;
	const CALC_X = CenterX - CALC_W / 2; 
	const CALC_Y = TOP_DOWN_PREDICTION_Y + TOP_DOWN_PREDICTION_H + 50;

	// 精度判断
	const PRECISION_W = 130;
	const PRECISION_H = 60;
	const PRECISION_X = CenterX - PRECISION_W / 2;
	const PRECISION_Y = CALC_Y + CALC_H + 30;

	// 仮説更新
	const HYPOTHESIS_UPDATE_W = 100;
	const HYPOTHESIS_UPDATE_H = 60;
	const HYPOTHESIS_UPDATE_X = CenterX - HYPOTHESIS_UPDATE_W / 2;
	const HYPOTHESIS_UPDATE_Y = PRECISION_Y + PRECISION_H + 40;

	// 学習
	const LEARNING_W = 100;
	const LEARNING_H = 60;
	const LEARNING_X = HYPOTHESIS_UPDATE_X + HYPOTHESIS_UPDATE_W + 70 - LEARNING_W / 2;
	const LEARNING_Y = HYPOTHESIS_UPDATE_Y;

	// 行動
	const ACTION_W = 100;
	const ACTION_H = 60;
	const ACTION_X = HYPOTHESIS_UPDATE_X  - 70 - LEARNING_W / 2;
	const ACTION_Y = HYPOTHESIS_UPDATE_Y;

	// 仮説からのショートカット
	const HYPOTHESIS_SHORTCUT1_X = ACTION_X + ACTION_W / 2;
	const HYPOTHESIS_SHORTCUT1_Y = ACTION_Y - 40;

	// 仮説へのショートカット
	const HYPOTHESIS_SHORTCUT2_X = HYPOTHESIS_UPDATE_X + HYPOTHESIS_UPDATE_W / 2;
	const HYPOTHESIS_SHORTCUT2_Y = HYPOTHESIS_UPDATE_Y + HYPOTHESIS_UPDATE_H + 60;

	// 外界へのショートカット
	const WORLD_SHORTCUT_X = ACTION_X + ACTION_W / 2;
	const WORLD_SHORTCUT_Y =  ACTION_Y + ACTION_H + 60;

	// 内部モデルからのショートカット
	const INTERNAL_MODEL_SHORTCUT1_X =  INTERNAL_MODEL_X + INTERNAL_MODEL_W / 2;
	const INTERNAL_MODEL_SHORTCUT1_Y =  CALC_Y + CALC_H;

	// 内部モデルへのショートカット
	const INTERNAL_MODEL_SHORTCUT2_X = LEARNING_X + LEARNING_W / 2;
	const INTERNAL_MODEL_SHORTCUT2_Y = LEARNING_Y + LEARNING_H + 60;

	// --- パス計算 ---
	const cylinderPath = `
	M ${INTERNAL_MODEL_X} ${INTERNAL_MODEL_Y}
    a ${INTERNAL_MODEL_W/2} ${RY} 0 1 1 ${INTERNAL_MODEL_W} 0
    a ${INTERNAL_MODEL_W/2} ${RY} 0 1 1 -${INTERNAL_MODEL_W} 0
	
	M ${INTERNAL_MODEL_X} ${INTERNAL_MODEL_Y}
    v ${INTERNAL_MODEL_H}
    a ${INTERNAL_MODEL_W/2} ${RY} 0 0 0 ${INTERNAL_MODEL_W} 0
    v -${INTERNAL_MODEL_H}
	
	a ${INTERNAL_MODEL_W/2} ${RY} 0 0 1 -${INTERNAL_MODEL_W} 0
	`;

	function getDiamondPath(x: number, y: number, w: number, h:number){
		return `
			M ${x} ${y} 
			L ${x + w / 2} ${y + h / 2}
			L ${x} ${y + h}
			L ${x - w / 2} ${y + h / 2}
			Z
		`;
	}
	
</script>

{#snippet proc(x:number, y:number, w:number, h:number, fill:string, text:string, id:string, description:string)}
	{@const lines = text.split('\n')}
	<rect {x} {y} width={w} height={h} {fill} stroke="black" />
	<line x1={x + 10} y1={y} x2={x + 10} y2={y + h} stroke="black" />
	<line x1={x + w - 10} y1={y} x2={x + w - 10} y2={y + h} stroke="black" />
	
	<text 
		{id}
		x={x + w / 2} 
		y={y + h / 2} 
		text-anchor="middle" 
		dominant-baseline="central" 
		font-size="1rem"
		stroke="white"
		stroke-width="5"
		stroke-linejoin="round"
		style="paint-order: stroke;"
	>
		{#each lines as line, i}
			<tspan 
				x={x + w / 2} 
				dy={i === 0 ? `-${(lines.length - 1) * 0.6}em` : "1.2em"}
			>
				{line}
			</tspan>
		{/each}
	</text>
	<Tooltip trigger="click" triggeredBy="#{id}">
		<div class="text-base">
			{@html description}
		</div>
	</Tooltip>
{/snippet}

{#snippet data(x:number, y:number, w:number, h:number, fill:string, text:string, id:string, description:string)}
	{@const lines = text.split('\n')}
	{@const offset = 20}
	
	<!-- 平行四辺形の頂点を計算 -->
	<polygon 
		points="
			{x + offset},{y} 
			{x + w},{y} 
			{x + w - offset},{y + h} 
			{x},{y + h}
		" 
		{fill} 
		stroke="black" 
	/>
	
	<text 
		{id}
		x={x + w / 2} 
		y={y + h / 2} 
		text-anchor="middle" 
		dominant-baseline="central" 
		font-size="1rem"
		stroke="white"
		stroke-width="5"
		stroke-linejoin="round"
		style="paint-order: stroke;"
	>
		{#each lines as line, i}
			<tspan 
				x={x + w / 2} 
				dy={i === 0 ? `-${(lines.length - 1) * 0.6}em` : "1.2em"}
			>
				{line}
			</tspan>
		{/each}
	</text>
	<Tooltip trigger="click" triggeredBy="#{id}">
		<div class="text-base">
			{@html description}
		</div>
	</Tooltip>
{/snippet}

{#snippet jump(x:number, y:number, text:string, description:string, id:string)}
	<text {id} {x} {y} text-anchor="middle" font-size="2rem">
		{text}
	</text>
	<Tooltip trigger="click" triggeredBy="#{id}">
		<div class="text-base">
			{@html description}
		</div>
	</Tooltip>
{/snippet}

<svg class="mx-auto max-w-sm" viewBox="0 0 {CanvasWidth} {CanvasHeight}" style="font-family: sans-serif;">
	<!-- 矢印の定義 -->
	<defs>
		<marker id={ARROW_ID} markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
			<polygon points="0 0, 10 3.5, 0 7" fill="context-stroke" />
		</marker>
	</defs>

	<!-- キャンバス背景 -->
	<rect x="0" y="0" width={CanvasWidth-1} height={CanvasHeight} fill="white" stroke="none" />

	<!-- 内部モデル -->
	<path d={cylinderPath} fill="#51a2ff" stroke="black" />
	<text 
		id="inner-model" 
		x={INTERNAL_MODEL_X + INTERNAL_MODEL_W / 2} 
		y={INTERNAL_MODEL_Y + INTERNAL_MODEL_H/2 + 5} text-anchor="middle" 
		font-size="1rem"
		stroke="white"
		stroke-width="5"
		stroke-linejoin="round"
		style="paint-order: stroke;"
	>
		<tspan x={INTERNAL_MODEL_X + INTERNAL_MODEL_W / 2} dy="0">過去の経験</tspan>
		<tspan x={INTERNAL_MODEL_X + INTERNAL_MODEL_W / 2} dy="1.2em">（①モデル）</tspan>
	</text>
	<Tooltip trigger="click" triggeredBy="#inner-model">
		<div class="text-base">
			これまでの<ruby>経験<rt>けいけん</rt></ruby>から<ruby>作<rt>つく</rt></ruby>られた、<ruby>脳内<rt>のうない</rt></ruby>にある「<ruby>世界<rt>せかい</rt></ruby>のルールブック」です。「この<ruby>状況<rt>じょうきょう</rt></ruby>なら、<ruby>次<rt>つぎ</rt></ruby>はこうなるだろう」という<ruby>傾向<rt>けいこう</rt></ruby>がまとめられています。このルールが、すべての<ruby>予想<rt>よそう</rt></ruby>の<ruby>土台<rt>どだい</rt></ruby>になります。<ruby>新<rt>あたら</rt></ruby>しい<ruby>経験<rt>けいけん</rt></ruby>をするたびに、ルールは<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>書<rt>か</rt></ruby>き<ruby>換<rt>か</rt></ruby>えられていきます。
		</div>
	</Tooltip>

	<!-- 仮説 -->
	<rect x={HYPOTHESIS_X} y={HYPOTHESIS_Y} width={HYPOTHESIS_W} height={HYPOTHESIS_H} fill="#51a2ff" stroke="black" />
	<line x1={HYPOTHESIS_X + 10} y1={HYPOTHESIS_Y} x2={HYPOTHESIS_X + 10} y2={HYPOTHESIS_Y + HYPOTHESIS_H} stroke="black" />
	<line x1={HYPOTHESIS_X} y1={HYPOTHESIS_Y + 10} x2={HYPOTHESIS_X + HYPOTHESIS_W} y2={HYPOTHESIS_Y + 10} stroke="black" />
	<text 
		id="hypothesis" 
		x={HYPOTHESIS_X + HYPOTHESIS_W / 2} 
		y={HYPOTHESIS_Y + HYPOTHESIS_H / 2 - 5} 
		text-anchor="middle" 
		dominant-baseline="central" 
		font-size="1rem"
		stroke="white"
		stroke-width="5"
		stroke-linejoin="round"
		style="paint-order: stroke;"
	>
		<tspan x={HYPOTHESIS_X + HYPOTHESIS_W / 2} dy="0">予想した現状</tspan>
		<tspan x={HYPOTHESIS_X + HYPOTHESIS_W / 2} dy="1.2em">（②仮説）</tspan>
	</text>
	<Tooltip trigger="click" triggeredBy="#hypothesis">
		<div class="text-base">
			ルールブックをもとに、<ruby>脳<rt>のう</rt></ruby>が「<ruby>今<rt>いま</rt></ruby>、<ruby>目<rt>め</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>で<ruby>何<rt>なに</rt></ruby>が<ruby>起<rt>お</rt></ruby>きているのか」を<ruby>推測<rt>すいそく</rt></ruby>したものです。「おそらくこういう<ruby>状況<rt>じょうきょう</rt></ruby>だろう」と、<ruby>脳<rt>のう</rt></ruby>が<ruby>考<rt>かんが</rt></ruby>えた"<ruby>仮<rt>かり</rt></ruby>の<ruby>答<rt>こた</rt></ruby>え"(<ruby>仮説<rt>かせつ</rt></ruby>)です。この<ruby>仮説<rt>かせつ</rt></ruby>は、<ruby>新<rt>あたら</rt></ruby>しい<ruby>情報<rt>じょうほう</rt></ruby>が<ruby>入<rt>はい</rt></ruby>るたびに、<ruby>一瞬一瞬<rt>いっしゅんいっしゅん</rt></ruby>もっともらしいものへと<ruby>更新<rt>こうしん</rt></ruby>されます。
		</div>
	</Tooltip>
	
	<!-- 外界 -->
	<rect x={WORLD_X} y={WORLD_Y} width={WORLD_W} height={WORLD_H} fill="none" stroke="black"  />
	<text id="world"x={WORLD_X} y={WORLD_Y + WORLD_H/2 - 5} text-anchor="middle" font-size="1rem" stroke="white"
		stroke-width="5"
		stroke-linejoin="round"
		style="paint-order: stroke;">
		<tspan x={WORLD_X + WORLD_W/2} dy="0">現実の環境</tspan>
		<tspan x={WORLD_X + WORLD_W/2} dy="1.2em">（③外界）</tspan>
		
	</text>
	<Tooltip trigger="click" triggeredBy="#world">
		<div class="text-base">
			<ruby>脳<rt>のう</rt></ruby>の<ruby>外側<rt>そとがわ</rt></ruby>にある、<ruby>周囲<rt>しゅうい</rt></ruby>の<ruby>環境<rt>かんきょう</rt></ruby>や<ruby>自分<rt>じぶん</rt></ruby>の<ruby>身体<rt>しんたい</rt></ruby>のことです。この<ruby>環境<rt>かんきょう</rt></ruby>は<ruby>常<rt>つね</rt></ruby>に<ruby>変化<rt>へんか</rt></ruby>し<ruby>続<rt>つづ</rt></ruby>けており、その<ruby>様子<rt>ようす</rt></ruby>は<ruby>絶<rt>た</rt></ruby>えず<ruby>実際<rt>じっさい</rt></ruby>の<ruby>感覚<rt>かんかく</rt></ruby>として<ruby>脳<rt>のう</rt></ruby>に<ruby>届<rt>とど</rt></ruby>けられます。また、<ruby>自分<rt>じぶん</rt></ruby>が<ruby>行動<rt>こうどう</rt></ruby>を<ruby>起<rt>お</rt></ruby>こすことで、この<ruby>環境<rt>かんきょう</rt></ruby>を<ruby>変化<rt>へんか</rt></ruby>させることもできます。
		</div>
	</Tooltip>

	<!-- 予測生成 -->
	{@render data(TOP_DOWN_PREDICTION_X, TOP_DOWN_PREDICTION_Y, TOP_DOWN_PREDICTION_W, TOP_DOWN_PREDICTION_H, "#51a2ff", "予想した感覚\n（感覚予測）", "top-down", "<ruby>今<rt>いま</rt></ruby>の<ruby>仮説<rt>かせつ</rt></ruby>をもとに、「それなら、<ruby>次<rt>つぎ</rt></ruby>はこう<ruby>見<rt>み</rt></ruby>えるはずだ」「こう<ruby>聞<rt>き</rt></ruby>こえるはずだ」と<ruby>脳<rt>のう</rt></ruby>が<ruby>先回<rt>さきまわ</rt></ruby>りして<ruby>立<rt>た</rt></ruby>てた<ruby>予想<rt>よそう</rt></ruby>です。これが、<ruby>後<rt>あと</rt></ruby>から<ruby>入<rt>はい</rt></ruby>ってくる「<ruby>実際<rt>じっさい</rt></ruby>の<ruby>感覚<rt>かんかく</rt></ruby>」と<ruby>答<rt>こた</rt></ruby>え<ruby>合<rt>あ</rt></ruby>わせをするための<ruby>基準<rt>きじゅん</rt></ruby>になります。")}

	<!-- 感覚受容 -->
	{@render data(SENSORY_RECEPTION_X, SENSORY_RECEPTION_Y, SENSORY_RECEPTION_W, SENSORY_RECEPTION_H, "none", "実際の感覚\n（感覚入力）", "sensory-reception", "<ruby>目<rt>め</rt></ruby>や<ruby>耳<rt>みみ</rt></ruby>、<ruby>皮膚<rt>ひふ</rt></ruby>などを<ruby>通<rt>つお</rt></ruby>じて、<ruby>脳<rt>のう</rt></ruby>に<ruby>届<rt>とど</rt></ruby>けられる<ruby>実際<rt>じっさい</rt></ruby>の<ruby>情報<rt>じょうほう</rt></ruby>です。<ruby>脳<rt>のう</rt></ruby>は<ruby>届<rt>とど</rt></ruby>いたこの<ruby>感覚<rt>かんかく</rt></ruby>と、<ruby>自分<rt>じぶん</rt></ruby>が<ruby>立<rt>た</rt></ruby>てた「<ruby>予想<rt>よそう</rt></ruby>した<ruby>感覚<rt>かんかく</rt></ruby>」を<ruby>照<rt>て</rt></ruby>らし<ruby>合<rt>あ</rt></ruby>わせて、いま<ruby>何<rt>なに</rt></ruby>が<ruby>起<rt>お</rt></ruby>きているかを<ruby>探<rt>さが</rt></ruby>ります。")}

	<!-- 予測誤差計算 -->
	{@render proc(CALC_X, CALC_Y, CALC_W, CALC_H, "#7c86ff", "ズレの検出\n（予測誤差）", "calc", "<ruby>脳<rt>のう</rt></ruby>が<ruby>立<rt>た</rt></ruby>てた「<ruby>予想<rt>よそう</rt></ruby>した<ruby>感覚<rt>かんかく</rt></ruby>」と、<ruby>外<rt>そと</rt></ruby>から<ruby>届<rt>とど</rt></ruby>いた「<ruby>実際<rt>じっさい</rt></ruby>の<ruby>感覚<rt>かんかく</rt></ruby>」の<ruby>食<rt>く</rt></ruby>い<ruby>違<rt>ちが</rt></ruby>いを<ruby>見<rt>み</rt></ruby>つけます。<ruby>脳<rt>のう</rt></ruby>はこのズレをできるだけなくすために、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>考<rt>かんが</rt></ruby>え（<ruby>仮説<rt>かせつ</rt></ruby>）を<ruby>修正<rt>しゅうせい</rt></ruby>したり、<ruby>行動<rt>こうどう</rt></ruby>を<ruby>起<rt>お</rt></ruby>こしたりします。")}
	
	<!-- 内部モデルからのショートカット-->
	{@render jump(INTERNAL_MODEL_SHORTCUT1_X, INTERNAL_MODEL_SHORTCUT1_Y, "①", "過去の経験(モデル)", "jump1")}

	<!-- 精度判断 -->
	{@render proc(PRECISION_X, PRECISION_Y, PRECISION_W, PRECISION_H, "#c27aff", "信頼度の調整\n（精度制御）", "precision", "<ruby>見<rt>み</rt></ruby>つかったズレを「どれくらい<ruby>信<rt>しん</rt></ruby>じるか」を<ruby>決<rt>き</rt></ruby>めます。<ruby>過去<rt>かこ</rt></ruby>の<ruby>経験<rt>けいけん</rt><ruby>をもとに「<ruby>霧<rt>きり</rt></ruby>でかすんで<ruby>見<rt>み</rt></ruby>える<ruby>情報<rt>じょうほう</rt></ruby>はアテにならないから<ruby>無視<rt>むし</rt></ruby>しよう。その<ruby>代<rt>か</rt></ruby>わり、この<ruby>手触<rt>てざわ</rt></ruby>りは<ruby>確実<rt>かくじつ</rt></ruby>だから<ruby>信<rt>しん</rt></ruby>じよう」といったように、<ruby>情報<rt>じょうほう</rt></ruby>の<ruby>重要度<rt>じゅうようど</rt></ruby>を<ruby>仕分<rt>しわ</rt></ruby>けします。この「どの<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>信<rt>しん</rt></ruby>じ、どの<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>切<rt>き</rt></ruby>り<ruby>捨<rt>す</rt></ruby>てるか」という<ruby>脳<rt>のう</rt></ruby>の<ruby>判断<rt>はんだん</rt></ruby>が、<ruby>認知<rt>にんち</rt></ruby>バイアス（<ruby>思<rt>おも</rt></ruby>い<ruby>込<rt>こ</rt></ruby>み）を<ruby>生<rt>う</rt></ruby>み<ruby>出<rt>だ</rt></ruby>す<ruby>大<rt>おお</rt></ruby>きな<ruby>原因<rt>げんいん</rt></ruby>になります。")}
	
	<!-- 仮説更新 -->
	{@render proc(HYPOTHESIS_UPDATE_X, HYPOTHESIS_UPDATE_Y, HYPOTHESIS_UPDATE_W, HYPOTHESIS_UPDATE_H, "#ff8904", "仮説の変更\n（知覚的推論）", "hypothesis-update", "ズレが<ruby>見<rt>み</rt></ruby>つかったとき、「<ruby>今<rt>いま</rt></ruby>、<ruby>何<rt>なに</rt></ruby>が<ruby>起<rt>お</rt></ruby>きているか」という<ruby>仮説<rt>かせつ</rt></ruby>を<ruby>修正<rt>しゅうせい</rt></ruby>します。<ruby>信頼<rt>しんらい</rt></ruby>できると<ruby>判断<rt>はんだん</rt></ruby>したズレだけを<ruby>取<rt>と</rt></ruby>り<ruby>込<rt>こ</rt></ruby>み、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>仮説<rt>かせつ</rt></ruby>をできるだけ<ruby>現実<rt>げんじつ</rt></ruby>の<ruby>状況<rt>じょうきょう</rt></ruby>に<ruby>近<rt>ちか</rt></ruby>づけていきます。<ruby>完璧<rt>かんぺき</rt></ruby>に<ruby>正<rt>ただ</rt></ruby>しくなくても、「<ruby>一番<rt>いちばん</rt></ruby>つじつまが<ruby>合<rt>あ</rt></ruby>う<ruby>仮説<rt>かせつ</rt></ruby>」に<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>かせます。")}

	<!-- 学習 -->
	{@render proc(LEARNING_X, LEARNING_Y, LEARNING_W, LEARNING_H, "#ff8904", "モデルの変更\n（知覚的学習）", "learning", "「<ruby>仮説<rt>かせつ</rt></ruby>の<ruby>変更<rt>へんこう</rt></ruby>」だけでは<ruby>対処<rt>たいしょ</rt></ruby>しきれないズレが<ruby>何回<rt>なんかい</rt></ruby>も<ruby>続<rt>つづ</rt></ruby>いたとき、<ruby>脳内<rt>のうない</rt></ruby>にある「<ruby>世界<rt>せかい</rt></ruby>のルールブック」そのものを<ruby>書<rt>か</rt></ruby>き<ruby>換<rt>か</rt></ruby>えます。ズレを<ruby>一時的<rt>いちじてき</rt></ruby>な<ruby>勘違<rt>かんちが</rt></ruby>いとして<ruby>終<rt>お</rt></ruby>わらせず、「<ruby>新<rt>あたら</rt></ruby>しいルール」として<ruby>記憶<rt>きおく</rt></ruby>することで、<ruby>次<rt>つぎ</rt></ruby>からの<ruby>予測<rt>よそく</rt></ruby>を<ruby>根本的<rt>こんぽんてき</rt></ruby>に<ruby>良<rt>よ</rt></ruby>くしていきます。")}

	<!-- 行動 -->
	{@render proc(ACTION_X, ACTION_Y, ACTION_W, ACTION_H, "#ff8904", "行動\n（能動的推論）", "action", "<ruby>頭<rt>あたま</rt></ruby>の<ruby>中<rt>なか</rt></ruby>の<ruby>解釈<rt>かいしゃく</rt></ruby>を<ruby>変<rt>か</rt></ruby>えるのではなく、<ruby>体<rt>からだ</rt></ruby>を<ruby>動<rt>うご</rt></ruby>かして「<ruby>現実<rt>げんじつ</rt></ruby>の<ruby>環境<rt>かんきょう</rt></ruby>」のほうを<ruby>変<rt>か</rt></ruby>え、ズレをなくす<ruby>仕組<rt>しく</rt></ruby>みです。<ruby>自分<rt>じぶん</rt></ruby>が<ruby>予測<rt>よそく</rt></ruby>した<ruby>通<rt>とお</rt></ruby>りの<ruby>感覚<rt>かんかく</rt></ruby>が<ruby>得<rt>え</rt></ruby>られるように<ruby>自<rt>みずか</rt></ruby>ら<ruby>行動<rt>こうどう</rt></ruby>を<ruby>起<rt>お</rt></ruby>こし、<ruby>現実<rt>げんじつ</rt></ruby>を<ruby>自分<rt>じぶん</rt></ruby>の<ruby>考<rt>かんが</rt></ruby>え（<ruby>仮説<rt>かせつ</rt></ruby>）に<ruby>合<rt>あ</rt></ruby>わせにいきます。")}

	<!-- 仮説からのショートカット-->
	{@render jump(HYPOTHESIS_SHORTCUT1_X, HYPOTHESIS_SHORTCUT1_Y, "②", "予想した現状(仮説)", "jump2_1")}
	
	<!-- 外界へのショートカット-->
	{@render jump(WORLD_SHORTCUT_X, WORLD_SHORTCUT_Y, "③", "現実の環境(外界)", "jump3")}

	<!-- 仮説へのショートカット-->
	{@render jump(HYPOTHESIS_SHORTCUT2_X, HYPOTHESIS_SHORTCUT2_Y, "②", "予想した現状(仮説)", "jump2_2")}

	<!-- 内部モデルへのショートカット-->
	{@render jump(INTERNAL_MODEL_SHORTCUT2_X, INTERNAL_MODEL_SHORTCUT2_Y, "①", "過去の経験(モデル)", "jump2")}
	

	<!-- 矢印（コネクタ） -->
	<g fill="none" stroke="black" marker-end="url(#{ARROW_ID})">
		<!-- モデル -> 仮説 -->
		<path 
			d="
				M {HYPOTHESIS_X + HYPOTHESIS_W / 2} {INTERNAL_MODEL_Y + INTERNAL_MODEL_H +RY} 
				V {HYPOTHESIS_Y}
				
			" 
			stroke-width="1"
		/>

		<!-- 仮説 -> 予測生成 -->
		<path 
			d="
				M {HYPOTHESIS_X + HYPOTHESIS_W / 2} {HYPOTHESIS_Y + HYPOTHESIS_H} 
				V {TOP_DOWN_PREDICTION_Y}
			" 
			stroke-width="1"
		/>

		<!-- 外界 -> 感覚受容 -->
		<path 
			d="
				M {WORLD_X + WORLD_W / 2} {WORLD_Y + WORLD_H}
				V {SENSORY_RECEPTION_Y} 
			" 
			stroke-width="1"
		/>

		<!-- 感覚受容 -> 誤差生成 -->
		<path 
			d="
				M {SENSORY_RECEPTION_X + SENSORY_RECEPTION_W / 2} {SENSORY_RECEPTION_Y + SENSORY_RECEPTION_H} 
				V {(SENSORY_RECEPTION_Y + SENSORY_RECEPTION_H) + (CALC_Y - (SENSORY_RECEPTION_Y + SENSORY_RECEPTION_H)) / 2}
				H {CALC_X + CALC_W / 2}
				V {CALC_Y}
			" 
			stroke-width="1"
		/>

		<!-- 予測生成 -> 誤差生成 -->
		<path 
			d="
				M {TOP_DOWN_PREDICTION_X + TOP_DOWN_PREDICTION_W / 2} {TOP_DOWN_PREDICTION_Y + TOP_DOWN_PREDICTION_H} 
				V {(TOP_DOWN_PREDICTION_Y + TOP_DOWN_PREDICTION_H) + (CALC_Y - (TOP_DOWN_PREDICTION_Y + TOP_DOWN_PREDICTION_H)) / 2}
				H {CALC_X + CALC_W / 2}
				V {CALC_Y}
			" 
			stroke-width="1"
		/>

		<!-- 誤差生成 -> 精度評価 -->
		<path 
			d="
				M {CALC_X + CALC_W / 2} {CALC_Y + CALC_H}
				V {PRECISION_Y} 
			" 
			stroke-width="1"
		/>

		<!-- 誤差生成 -> 学習 -->
		<path 
			d="
				M {PRECISION_X + PRECISION_W} {PRECISION_Y + PRECISION_H / 2}
				H {LEARNING_X + LEARNING_W / 2}
				V {LEARNING_Y} 
			" 
			stroke-width="1"
			stroke-dasharray="4"
		/>

		<!-- 内部モデル -> 精度評価 -->
		<path 
			d="
				M {INTERNAL_MODEL_SHORTCUT1_X} {INTERNAL_MODEL_SHORTCUT1_Y + 2}
				V {(CALC_Y + CALC_H) + ((PRECISION_Y -(CALC_Y + CALC_H)) / 2)}
				H {PRECISION_X + PRECISION_W / 2 + 20} 
				V {PRECISION_Y}
			"
			stroke-width="1"
		/>

		<!-- 仮説からのショートカット -> 行動 -->
		<path 
			d="
				M {HYPOTHESIS_SHORTCUT1_X} {HYPOTHESIS_SHORTCUT1_Y + 2}
				V {ACTION_Y} 
			" 
			stroke-width="1"
		/>

		<!-- 精度評価 -> 仮説更新 -->
		<path 
			d="
				M {PRECISION_X + PRECISION_W / 2} {PRECISION_Y + PRECISION_H}
				V {HYPOTHESIS_UPDATE_Y} 
			" 
			stroke-width="1"
		/>		

		<!-- 行動 -> 外界へのショートカット -->
		<path 
			d="
				M {ACTION_X + ACTION_W / 2} {ACTION_Y + ACTION_H}
				V {WORLD_SHORTCUT_Y - 27} 
			" 
			stroke-width="1"
		/>

		<!-- 仮説更新 -> 仮説へのショートカット -->
		<path 
			d="
				M {HYPOTHESIS_UPDATE_X + HYPOTHESIS_UPDATE_W / 2} {HYPOTHESIS_UPDATE_Y + HYPOTHESIS_UPDATE_H}
				V {HYPOTHESIS_SHORTCUT2_Y - 27} 
			" 
			stroke-width="1"
		/>

		<!-- 学習 -> 内部モデルへのショートカット -->
		<path 
			d="
				M {LEARNING_X + LEARNING_W / 2} {LEARNING_Y + LEARNING_H}
				V {INTERNAL_MODEL_SHORTCUT2_Y - 27} 
			" 
			stroke-width="1"
		/>
		
	</g>

	<!-- ラベルテキスト -->
	
</svg>