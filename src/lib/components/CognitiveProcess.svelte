<script lang="ts">
	import { Tooltip } from 'flowbite-svelte';
	import BroadArrow from './BroadArrow.svelte';
	import DoubleHeadedArrow from './DoubleHeadedArrow.svelte';

	let {}: {} = $props();

	const CanvasWidth = 360;
	const CanvasHeight = 620;

	const TEXT_TOP_MARGIN = 2;

	// 認知プロセス
	const PROCESS_X = 20;
	const PROCESS_Y = 20;
	const PROCESS_W = 290;
	const PROCESS_H = 580;
	const PROCESS_TEXT_X = PROCESS_X + PROCESS_W / 2;
	const PROCESS_TEXT_Y = PROCESS_Y + 4;

	// System 1
	const SYSTEM1_X = 50;
	const SYSTEM1_Y = PROCESS_Y + 42;
	const SYSTEM1_W = 110;
	const SYSTEM1_H = 510;
	const SYSTEM1_TEXT_X = SYSTEM1_X + SYSTEM1_W / 2;
	const SYSTEM1_TEXT_Y = SYSTEM1_Y;

	// System 2
	const SYSTEM2_X = 180;
	const SYSTEM2_Y = SYSTEM1_Y;
	const SYSTEM2_W = SYSTEM1_W;
	const SYSTEM2_H = SYSTEM1_H;
	const SYSTEM2_TEXT_X = SYSTEM2_X + SYSTEM2_W / 2;
	const SYSTEM2_TEXT_Y = SYSTEM2_Y;

	// 受容
	const RECEPTION_X = 60;
	const RECEPTION_Y = SYSTEM1_Y + 50;
	const RECEPTION_W = 220;
	const RECEPTION_H = 50;
	const RECEPTION_TEXT_X = RECEPTION_X + RECEPTION_W / 2;
	const RECEPTION_TEXT_Y = RECEPTION_Y + RECEPTION_H / 2;

	// 解釈
	const INTERPRETATION_X = RECEPTION_X;
	const INTERPRETATION_Y = RECEPTION_Y + 80;
	const INTERPRETATION_W = RECEPTION_W;
	const INTERPRETATION_H = RECEPTION_H;
	const INTERPRETATION_TEXT_X = INTERPRETATION_X + INTERPRETATION_W / 2;
	const INTERPRETATION_TEXT_Y = INTERPRETATION_Y + INTERPRETATION_H / 2;

	// 決定
	const DICISION_X = RECEPTION_X;
	const DICISION_Y = INTERPRETATION_Y + 80;
	const DICISION_W = RECEPTION_W;
	const DICISION_H = RECEPTION_H;
	const DICISION_TEXT_X = DICISION_X + DICISION_W / 2;
	const DICISION_TEXT_Y = DICISION_Y + DICISION_H / 2;

	// 表出・適応
	const EXPRESSION_X = RECEPTION_X;
	const EXPRESSION_Y = DICISION_Y + 80;
	const EXPRESSION_W = RECEPTION_W;
	const EXPRESSION_H = RECEPTION_H;
	const EXPRESSION_TEXT_X = EXPRESSION_X + EXPRESSION_W / 2;
	const EXPRESSION_TEXT_Y = EXPRESSION_Y + EXPRESSION_H / 2;

	// 記録
	const MEMORY_X = RECEPTION_X;
	const MEMORY_Y = EXPRESSION_Y + 80;
	const MEMORY_W = RECEPTION_W;
	const MEMORY_H = RECEPTION_H;
	const MEMORY_TEXT_X = MEMORY_X + MEMORY_W / 2;
	const MEMORY_TEXT_Y = MEMORY_Y + MEMORY_H / 2;

	// 長期記憶
	const LONG_TERM_MEMORY_X = 35;
	const LONG_TERM_MEMORY_Y = MEMORY_Y + 53;
	const LONG_TERM_MEMORY_W = 0.7;
	const LONG_TERM_MEMORY_H = 0.3;
	const LONG_TERM_MEMORY_TEXT_X = SYSTEM1_TEXT_X;
	const LONG_TERM_MEMORY_TEXT_Y = LONG_TERM_MEMORY_Y + 45;

	// 作業記憶
	const WORKING_MEMORY_X = SYSTEM2_X + 10;
	const WORKING_MEMORY_Y = MEMORY_Y + 75;
	const WORKING_MEMORY_W = SYSTEM2_W - 20;
	const WORKING_MEMORY_H = 55;

	// 受容→表出
	const RECEPTION_TO_EXPRESSION_X = SYSTEM1_X + SYSTEM1_W / 2 - 10;
	const RECEPTION_TO_EXPRESSION_Y1 = RECEPTION_Y + RECEPTION_H;
	const RECEPTION_TO_EXPRESSION_Y2 = EXPRESSION_Y;

	// 受容→解釈
	const RECEPTION_TO_INTERPRETATION_X = SYSTEM2_X + SYSTEM2_W / 2 + 10;
	const RECEPTION_TO_INTERPRETATION_Y1 = RECEPTION_Y + RECEPTION_H;
	const RECEPTION_TO_INTERPRETATION_Y2 = INTERPRETATION_Y;

	// 解釈→決定
	const INTERPRETATION_TO_DECISION_X = RECEPTION_TO_INTERPRETATION_X;
	const INTERPRETATION_TO_DECISION_Y1 = INTERPRETATION_Y + INTERPRETATION_H;
	const INTERPRETATION_TO_DECISION_Y2 = DICISION_Y;

	// 決定→表出
	const DECISION_TO_EXPRESSION_X = RECEPTION_TO_INTERPRETATION_X;
	const DECISION_TO_EXPRESSION_Y1 = DICISION_Y + DICISION_H;
	const DECISION_TO_EXPRESSION_Y2 = EXPRESSION_Y;

	// 記憶→長期記憶
	const MEMORY_TO_LONG_TERM_MEMORY_X = SYSTEM1_X + SYSTEM1_W / 2;
	const MEMORY_TO_LONG_TERM_MEMORY_Y1 = MEMORY_Y + MEMORY_H;
	const MEMORY_TO_LONG_TERM_MEMORY_Y2 = WORKING_MEMORY_Y;

	// 記憶→作業記憶
	const MEMORY_TO_WORKING_MEMORY_X = SYSTEM2_X + SYSTEM2_W / 2;
	const MEMORY_TO_WORKING_MEMORY_Y1 = MEMORY_Y + MEMORY_H;
	const MEMORY_TO_WORKING_MEMORY_Y2 = WORKING_MEMORY_Y;
</script>

{#snippet phase(
	x: number,
	y: number,
	w: number,
	h: number,
	rx: number = 0,
	fill: string,
	textX: number,
	textY: number,
	text: string,
	id: string,
	description: string
)}
	<rect {x} {y} width={w} height={h} {fill} {rx} stroke-width="1" stroke="black" />
	<text
		{id}
		x={textX}
		y={textY}
		font-size="1rem"
		text-anchor="middle"
		dominant-baseline="ideographic"
		fill="black"
		stroke="white"
		stroke-width="5"
		stroke-linejoin="round"
		style="paint-order: stroke;"
	>
		{#each text.split('\n') as line, i}
			<tspan x={textX} dy={i === 0 ? '0' : '1.2em'}>{line}</tspan>
		{/each}
	</text>
	<Tooltip trigger="click" triggeredBy="#{id}">
		<div class="text-base">
			{@html description}
		</div>
	</Tooltip>
{/snippet}

<svg class="mx-auto max-w-sm" viewBox="0 0 {CanvasWidth} {CanvasHeight}">
	<rect
		x="0"
		y="0"
		width={CanvasWidth - 1}
		height={CanvasHeight}
		fill="white"
		stroke-width="1"
		stroke=""
	/>

	<!-- 認知プロセス -->
	<rect
		x={PROCESS_X}
		y={PROCESS_Y}
		width={PROCESS_W}
		height={PROCESS_H}
		fill="none"
		stroke-width="1"
		stroke="black"
	/>
	<rect
		x={PROCESS_X + 3}
		y={PROCESS_Y + 3}
		width={PROCESS_W - 6}
		height={PROCESS_H - 6}
		fill="none"
		stroke-width="1"
		stroke="black"
	/>
	<text
		id="process"
		x={PROCESS_TEXT_X}
		y={PROCESS_TEXT_Y + TEXT_TOP_MARGIN}
		font-size="1rem"
		text-anchor="middle"
		dominant-baseline="hanging"
		fill="black">
		認知プロセス
	</text>
	<Tooltip trigger="click" triggeredBy="#process">
		<div class="text-base">
			<ruby>外部<rt>がいぶ</rt></ruby>からの「<ruby>入力<rt>にゅうりょく</rt></ruby>」を<ruby>脳内<rt>のうない</rt></ruby>で「<ruby>処理<rt>しょり</rt></ruby>・<ruby>記憶<rt>きおく</rt></ruby>」し、<ruby>行動<rt>こうどう</rt></ruby>として「<ruby>出力<rt>しゅつりょく</rt></ruby>」する<ruby>一連<rt>いちれん</rt></ruby>の<ruby>流<rt>なが</rt></ruby>れ。<br />
        	<ruby>直感<rt>ちょっかん</rt></ruby>と<ruby>論理<rt>ろんり</rt></ruby>（System 1&2）が、<ruby>蓄積<rt>ちくせき</rt></ruby>された<ruby>知識<rt>ちしき</rt></ruby>を<ruby>活用<rt>かつよう</rt></ruby>しながら<ruby>絶<rt>た</rt></ruby>えず<ruby>循環<rt>じゅんかん</rt></ruby>している。
		</div>
	</Tooltip>

	<!-- System1 -->
	<rect
		x={SYSTEM1_X}
		y={SYSTEM1_Y}
		width={SYSTEM1_W}
		height={SYSTEM1_H}
		fill="none"
		stroke-width="1"
		stroke="black"
		stroke-dasharray="5"
	/>
	<text
		id="system1"
		x={SYSTEM1_TEXT_X}
		y={SYSTEM1_TEXT_Y + TEXT_TOP_MARGIN}
		font-size="1rem"
		text-anchor="middle"
		dominant-baseline="hanging"
		fill="black"
	>
		<tspan x={SYSTEM1_TEXT_X} dy="0">⚙️System 1</tspan>
		<tspan x={SYSTEM1_TEXT_X} dy="1.2em">(直感・無意識)</tspan>
	</text>
	<Tooltip trigger="click" triggeredBy="#system1">
		<div class="text-base">
			<ruby>直感的<rt>ちょっかんてき</rt></ruby>・<ruby>自動的<rt>じどうてき</rt></ruby>に<ruby>働<rt>はたら</rt></ruby>く<ruby>思考<rt>しこう</rt></ruby>モード。<br>
			<ruby>無意識<rt>むいしき</rt></ruby>かつ<ruby>瞬時<rt>しゅんじ</rt></ruby>に<ruby>判断<rt>はんだん</rt></ruby>を<ruby>下<rt>くだ</rt></ruby>し、<ruby>脳<rt>のう</rt></ruby>のエネルギー<ruby>消費<rt>しょうひ</rt></ruby>を<ruby>抑<rt>おさ</rt></ruby>える。
		</div>
	</Tooltip>

	<!-- System2 -->
	<rect
		x={SYSTEM2_X}
		y={SYSTEM2_Y}
		width={SYSTEM2_W}
		height={SYSTEM2_H}
		fill="none"
		stroke-width="1"
		stroke="black"
		stroke-dasharray="5"
	/>
	<text
		id="system2"
		x={SYSTEM2_TEXT_X}
		y={SYSTEM2_TEXT_Y + TEXT_TOP_MARGIN}
		font-size="1rem"
		text-anchor="middle"
		dominant-baseline="hanging"
		fill="black"
	>
		<tspan x={SYSTEM2_TEXT_X} dy="0">💡System 2</tspan>
		<tspan x={SYSTEM2_TEXT_X} dy="1.2em">(論理・意識)</tspan>
	</text>
	<Tooltip trigger="click" triggeredBy="#system2">
		<div class="text-base">
			<ruby>論理的<rt>ろんりてき</rt></ruby>・<ruby>分析的<rt>ぶんせきてき</rt></ruby>な<ruby>思考<rt>しこう</rt></ruby>モード。<br>
			<ruby>意識的<rt>いしきてき</rt></ruby>な<ruby>努力<rt>どりょく</rt></ruby>を<ruby>必要<rt>ひつよう</rt></ruby>とし、<ruby>複雑<rt>ふくざつ</rt></ruby>な<ruby>計算<rt>けいさん</rt></ruby>や<ruby>慎重<rt>しんちょう</rt></ruby>な<ruby>判断<rt>はんだん</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>際<rt>さい</rt></ruby>に<ruby>働<rt>はたら</rt></ruby>く。
		</div>
    </Tooltip>

	<!-- 受容 -->
	{@render phase(
		RECEPTION_X,
		RECEPTION_Y,
		RECEPTION_W,
		RECEPTION_H,
		undefined,
		'#51a2ff',
		RECEPTION_TEXT_X,
		RECEPTION_TEXT_Y,
		'知覚\n(注意・選択・取込)',
		'reception',
		'<ruby>膨大<rt>ぼうだい</rt></ruby>な<ruby>情報<rt>じょうほう</rt></ruby>から<ruby>必要<rt>ひつよう</rt></ruby>なものに<ruby>注意<rt>ちゅうい</rt></ruby>を<ruby>向<rt>む</rt></ruby>け、<ruby>脳内<rt>のうない</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>込<rt>こ</rt></ruby>む<ruby>入口<rt>いりぐち</rt></ruby>。<br><ruby>無意識<rt>むいしき</rt></ruby>に<ruby>取捨選択<rt>しゅしゃせんたく</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>い、<ruby>処理<rt>しょり</rt></ruby>の<ruby>対象<rt>たいしょう</rt></ruby>を<ruby>絞<rt>しぼ</rt></ruby>り<ruby>込<rt>こ</rt></ruby>む。'
	)}

	<!-- 解釈 -->
	{@render phase(
		INTERPRETATION_X,
		INTERPRETATION_Y,
		INTERPRETATION_W,
		INTERPRETATION_H,
		undefined,
		'#7c86ff',
		INTERPRETATION_TEXT_X,
		INTERPRETATION_TEXT_Y,
		'照合\n(解釈・連想・意味)',
		'interpretation',
		'<ruby>取<rt>と</rt></ruby>り<ruby>込<rt>こ</rt></ruby>んだ<ruby>情報<rt>じょうほう</rt></ruby>を、<ruby>過去<rt>かこ</rt></ruby>の<ruby>知識<rt>ちしき</rt></ruby>と<ruby>照<rt>て</rt></ruby>らし<ruby>合<rt>あ</rt></ruby>わせる<ruby>段階<rt>だんかい</rt></ruby>。<br>それが<ruby>何<rt>なん</rt></ruby>であるかを<ruby>解釈<rt>かいしゃく</rt></ruby>し、<ruby>関連<rt>かんれん</rt></ruby>する<ruby>記憶<rt>きおく</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>び<ruby>起<rt>お</rt></ruby>こす。'
	)}

	<!-- 決定 -->
	{@render phase(
		DICISION_X,
		DICISION_Y,
		DICISION_W,
		DICISION_H,
		undefined,
		'#c27aff',
		DICISION_TEXT_X,
		DICISION_TEXT_Y,
		'判断\n(推論・断定・採択)',
		'decision',
		'<ruby>照合<rt>しょうごう</rt></ruby>した<ruby>情報<rt>じょうほう</rt></ruby>に<ruby>基<rt>もと</rt></ruby>づき、どう<ruby>動<rt>うご</rt></ruby>くかを<ruby>決<rt>き</rt></ruby>めるプロセス。<br><ruby>結論<rt>けつろん</rt></ruby>を<ruby>断定<rt>だんてい</rt></ruby>したり、<ruby>複数<rt>ふくすう</rt></ruby>の<ruby>選択肢<rt>せんたくし</rt></ruby>から<ruby>行動<rt>こうどう</rt></ruby>を<ruby>採択<rt>さいたく</rt></ruby>したりする。'
	)}

	<!-- 表出・適応 -->
	{@render phase(
		EXPRESSION_X,
		EXPRESSION_Y,
		EXPRESSION_W,
		EXPRESSION_H,
		undefined,
		'#ff8904',
		EXPRESSION_TEXT_X,
		EXPRESSION_TEXT_Y,
		'反応\n(出力・表現・修正)',
		'expression',
		'<ruby>導<rt>みちび</rt></ruby>き<ruby>出<rt>だ</rt></ruby>した<ruby>判断<rt>はんだん</rt></ruby>を、<ruby>言葉<rt>ことば</rt></ruby>や<ruby>動作<rt>どうさ</rt></ruby>として<ruby>外部<rt>がいぶ</rt></ruby>へ<ruby>出力<rt>しゅつりょく</rt></ruby>する<ruby>段階<rt>だんかい</rt></ruby>。<br> <ruby>実行<rt>じっこう</rt></ruby>した<ruby>結果<rt>けっか</rt></ruby>を<ruby>見<rt>み</rt></ruby>て、その<ruby>場<rt>ば</rt></ruby>で<ruby>微調整<rt>びちょうせい</rt></ruby>（<ruby>修正<rt>しゅうせい</rt></ruby>）を<ruby>行<rt>おこな</rt></ruby>うことも<ruby>含<rt>ふく</rt></ruby>む。'
	)}

	<!-- 記録 -->
	{@render phase(
		MEMORY_X,
		MEMORY_Y,
		MEMORY_W,
		MEMORY_H,
		MEMORY_H / 2,
		'white',
		MEMORY_TEXT_X,
		MEMORY_TEXT_Y,
		'記憶\n(定着・検索・再認)',
		'memory',
		'<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>脳<rt>のう</rt></ruby>に<ruby>刻<rt>きざ</rt></ruby>み、<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>時<rt>とき</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>出<rt>だ</rt></ruby>す<ruby>仕組<rt>しく</rt></ruby>み。<br><ruby>過去<rt>かこ</rt></ruby>に<ruby>経験<rt>けいけん</rt></ruby>したことと<ruby>同<rt>おな<rt></ruby>じだと<ruby>気<rt>き</rt></ruby>づく「<ruby>再認<rt>さいにん</rt></ruby>」もここに<ruby>含<rt>ふく</rt></ruby>まれる。'
	)}

	<!-- 長期記憶 -->
	<g
		transform="translate({LONG_TERM_MEMORY_X}, {LONG_TERM_MEMORY_Y}) scale({LONG_TERM_MEMORY_W}, {LONG_TERM_MEMORY_H})"
	>
		<!-- 底面 -->
		<ellipse
			cx="100"
			cy="230"
			rx="60"
			ry="25"
			fill="white"
			stroke="black"
			stroke-width="1"
			vector-effect="non-scaling-stroke"
		/>
		<!-- 側面を隠す白塗り -->
		<rect x="40" y="70" width="120" height="160" fill="white" vector-effect="non-scaling-stroke" />
		<!-- 側面の縦線 -->
		<line
			x1="40"
			y1="70"
			x2="40"
			y2="230"
			stroke="black"
			stroke-width="1"
			vector-effect="non-scaling-stroke"
		/>
		<line
			x1="160"
			y1="70"
			x2="160"
			y2="230"
			stroke="black"
			stroke-width="1"
			vector-effect="non-scaling-stroke"
		/>
		<!-- 上面 -->
		<ellipse
			cx="100"
			cy="70"
			rx="60"
			ry="25"
			fill="white"
			stroke="black"
			stroke-width="1"
			vector-effect="non-scaling-stroke"
		/>
	</g>
	<text
		id="ltm"
		x={LONG_TERM_MEMORY_TEXT_X}
		y={LONG_TERM_MEMORY_TEXT_Y}
		font-size="1rem"
		text-anchor="middle"
		dominant-baseline="hanging"
		fill="black"
	>
		長期記憶
	</text>
	<Tooltip trigger="click" triggeredBy="#ltm">
		<div class="text-base">
        	<ruby>数日<rt>すうじつ</rt></ruby>から<ruby>一生<rt>いっしょう</rt></ruby>にわたって<ruby>保存<rt>ほぞん</rt></ruby>される<ruby>巨大<rt>きょだい</rt></ruby>な<ruby>倉庫<rt>そうこ</rt></ruby>。<br>
			<ruby>経験<rt>けいけん</rt></ruby>や<ruby>概念<rt>がいねん</rt></ruby>、スキルなどが<ruby>蓄積<rt>ちくせき</rt></ruby>され、あらゆる<ruby>判断<rt>はんだん</rt></ruby>の<ruby>土台<rt>どだい</rt></ruby>となる。
		</div>
    </Tooltip>

	<!-- 作業記憶 -->
	<rect
		x={WORKING_MEMORY_X}
		y={WORKING_MEMORY_Y}
		width={WORKING_MEMORY_W}
		height={WORKING_MEMORY_H}
		fill="none"
		stroke-width="1"
		stroke="black"
	/>
	<line
		x1={WORKING_MEMORY_X + 10}
		y1={WORKING_MEMORY_Y}
		x2={WORKING_MEMORY_X + 10}
		y2={WORKING_MEMORY_Y + WORKING_MEMORY_H}
		stroke="black"
		stroke-width="1"
	/>
	<line
		x1={WORKING_MEMORY_X}
		y1={WORKING_MEMORY_Y + 10}
		x2={WORKING_MEMORY_X + WORKING_MEMORY_W}
		y2={WORKING_MEMORY_Y + 10}
		stroke="black"
		stroke-width="1"
	/>
	<text
		id="stm"
		x={WORKING_MEMORY_X + WORKING_MEMORY_W / 2 + 4}
		y={WORKING_MEMORY_Y + WORKING_MEMORY_H / 2}
		font-size="1rem"
		text-anchor="middle"
		dominant-baseline="central"
		fill="black"
	>
		作業記憶
	</text>
	<Tooltip trigger="click" triggeredBy="#stm">
		<div class="text-base">
        	<ruby>今<rt>いま</rt></ruby><ruby>考<rt>かんが</rt></ruby>えていることを<ruby>一時的<rt>いちじてき</rt></ruby>に<ruby>保持<rt>ほじ</rt></ruby>する<ruby>脳<rt>のう</rt></ruby>の<ruby>作業机<rt>さぎょうづくえ</rt></ruby>。<br>
			<ruby>情報<rt>じょうほう</rt></ruby>の<ruby>加工<rt>かこう</rt></ruby>や<ruby>判断<rt>はんだん</rt></ruby>をリアルタイムで<ruby>行<rt>おこな</rt></ruby>うために<ruby>使<rt>つか</rt></ruby>われる。
		</div>
    </Tooltip>

	<!-- 受容→表出 -->
	<BroadArrow
		x1={RECEPTION_TO_EXPRESSION_X}
		y1={RECEPTION_TO_EXPRESSION_Y1}
		x2={RECEPTION_TO_EXPRESSION_X}
		y2={RECEPTION_TO_EXPRESSION_Y2}
	/>

	<!-- 受容→解釈 -->
	<DoubleHeadedArrow
		x1={RECEPTION_TO_INTERPRETATION_X}
		y1={RECEPTION_TO_INTERPRETATION_Y1}
		x2={RECEPTION_TO_INTERPRETATION_X}
		y2={RECEPTION_TO_INTERPRETATION_Y2}
	/>

	<!-- 解釈→決定 -->
	<DoubleHeadedArrow
		x1={INTERPRETATION_TO_DECISION_X}
		y1={INTERPRETATION_TO_DECISION_Y1}
		x2={INTERPRETATION_TO_DECISION_X}
		y2={INTERPRETATION_TO_DECISION_Y2}
	/>

	<!-- 決定→表出 -->
	<DoubleHeadedArrow
		x1={DECISION_TO_EXPRESSION_X}
		y1={DECISION_TO_EXPRESSION_Y1}
		x2={DECISION_TO_EXPRESSION_X}
		y2={DECISION_TO_EXPRESSION_Y2}
	/>

	<!-- 記憶→長期記憶 -->
	<DoubleHeadedArrow
		x1={MEMORY_TO_LONG_TERM_MEMORY_X}
		y1={MEMORY_TO_LONG_TERM_MEMORY_Y1}
		x2={MEMORY_TO_LONG_TERM_MEMORY_X}
		y2={MEMORY_TO_LONG_TERM_MEMORY_Y2}
	/>

	<!-- 記憶→作業記憶 -->
	<DoubleHeadedArrow
		x1={MEMORY_TO_WORKING_MEMORY_X}
		y1={MEMORY_TO_WORKING_MEMORY_Y1}
		x2={MEMORY_TO_WORKING_MEMORY_X}
		y2={MEMORY_TO_WORKING_MEMORY_Y2}
	/>

	<!-- 表出→受容 -->
	{#if true}
		{@const sx = EXPRESSION_X + EXPRESSION_W / 2}
		{@const sy = EXPRESSION_Y + EXPRESSION_H}
		{@const y1 = MEMORY_Y - (MEMORY_Y - (EXPRESSION_Y + EXPRESSION_H)) / 2}
		{@const x1 = PROCESS_X + PROCESS_W + 20}
		{@const y2 = SYSTEM1_X}
		{@const x2 = RECEPTION_X + RECEPTION_W / 2}
		{@const y3 = RECEPTION_Y}

		<polyline
			points="
                {sx},{sy}
                {sx},{y1}
                {x1},{y1}
                {x1},{y2}
                {x2},{y2}
            "
			fill="none"
			stroke="black"
			stroke-width="1"
		/>
		<DoubleHeadedArrow x1={x2} y1={y2} {x2} y2={y3} isEnd={true} isStart={false} />

		{@const textX = x1 + 10}
		{@const textY = y2 + (y1 - y2) / 2}

		<text
			id="feedback"
			x={textX}
			y={textY}
			writing-mode="vertical-rl"
			font-size="12"
			text-anchor="middle"
			dominant-baseline="center">フィードバック</text
		>
		<Tooltip trigger="click" triggeredBy="#feedback" placement="left">
			<div class="text-base max-w-[20rem]">
            	<ruby>反応<rt>はんのう</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>を<ruby>次<rt>つぎ</rt></ruby>の「<ruby>知覚<rt>ちかく</rt></ruby>」へ<ruby>繋<rt>つな</rt></ruby>げる<ruby>修正<rt>しゅうせい</rt></ruby>ループ。<br />
            	<ruby>期待通<rt>きたいどお</rt></ruby>りの<ruby>結果<rt>けっか</rt></ruby>か<ruby>確認<rt>かくにん</rt></ruby>し、<ruby>学習<rt>がくしゅう</rt></ruby>や<ruby>次<rt>つぎ</rt></ruby>のアクションの<ruby>精度<rt>せいど</rt></ruby>を<ruby>高<rt>たか</rt></ruby>める。
			</div>
        </Tooltip>
	{/if}
</svg>
