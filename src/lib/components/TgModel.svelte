<script lang="ts">
	import BroadArrow from './BroadArrow.svelte';
	import DoubleHeadedArrow from './DoubleHeadedArrow.svelte';

	let {
		targets = '',
		gravities = '',
		sources = ''
	}: {
		targets?: string;
		gravities?: string;
		sources?: string;
	} = $props();

	const CanvasWidth = 360;
	const CanvasHeight = 420;
</script>

<svg viewBox="0 0 {CanvasWidth} {CanvasHeight}">
	<rect
		x="0"
		y="0"
		width={CanvasWidth - 1}
		height={CanvasHeight}
		fill="white"
		stroke-width="1"
		stroke=""
	/>

	<!-- アクター -->
	{#if true}
		{@const headX = 40}
		{@const headY = 50}
		{@const headR = 10}
		<!-- 頭 -->
		<circle cx={headX} cy={headY} r={headR} fill="white" stroke="black" stroke-width="1" />

		{@const armY = headY + headR + 5}
		{@const handW = headR * 2}
		<!-- 腕 -->
		<line
			x1={headX - handW / 2}
			y1={armY}
			x2={headX + handW / 2}
			y2={armY}
			stroke="black"
			stroke-width="1"
		/>

		{@const bodyX = headX}
		{@const bodyY1 = headY + headR}
		{@const bodyH = 20}
		{@const bodyY2 = bodyY1 + bodyH}
		<!-- 体-->
		<line x1={bodyX} y1={bodyY1} x2={bodyX} y2={bodyY2} stroke="black" stroke-width="1" />

		{@const legH = 10}
		<!-- 足 -->
		<line
			x1={bodyX}
			y1={bodyY2}
			x2={bodyX - handW / 2}
			y2={bodyY2 + legH}
			stroke="black"
			stroke-width="1"
		/>
		<line
			x1={bodyX}
			y1={bodyY2}
			x2={bodyX + handW / 2}
			y2={bodyY2 + legH}
			stroke="black"
			stroke-width="1"
		/>

		<!-- 矢印 -->
		{@const arrowX1 = headX + headR + 10}
		{@const arrowY1 = headY - headR + (bodyY2 + legH - (headY - headR)) / 2}
		{@const arrowX2 = arrowX1 + 140}
		<DoubleHeadedArrow
			x1={arrowX1}
			y1={arrowY1}
			x2={arrowX2}
			y2={arrowY1}
			isStart={false}
			isEnd={true}
			strokeDasharray={5}
		/>

		<DoubleHeadedArrow
			x1={arrowX1}
			y1={arrowY1}
			x2={arrowX2}
			y2={arrowY1 + 80}
			isStart={false}
			isEnd={true}
		/>

		<!-- 目指していた目的 -->
		{@const targetX = arrowX2 + 5}
		{@const targetW = 150}
		{@const targetH = 30}
		{@const targetTextX = targetX + targetW / 2}
		{@const targetY = arrowY1 - targetH / 2}
		{@const targetTextY = targetY + targetH / 2}

		<rect
			x={targetX}
			y={targetY}
			width={targetW}
			height={targetH}
			fill="#f36100"
			stroke-width="1"
			stroke="black"
		/>
		<text
			x={targetTextX}
			y={targetTextY}
			font-size="1rem"
			fill="white"
			text-anchor="middle"
			dominant-baseline="central">{targets}</text
		>

		{@const targetLabelY = targetY + targetH + 3}
		<text
			x={targetTextX}
			y={targetLabelY}
			font-size="1rem"
			fill="black"
			text-anchor="middle"
			dominant-baseline="hanging">本来の目的</text
		>

		<!-- 歪められた目的 -->
		<text x={targetTextX} y={arrowY1 + 100} font-size="40" fill="black" text-anchor="middle"
			>💀</text
		>
		<text x={targetTextX} y={arrowY1 + 100 + 20} font-size="1rem" fill="black" text-anchor="middle"
			>歪められた目的</text
		>

		{@const center = (arrowX1 + arrowX2) / 2}
		{@const startX = (arrowX1 + arrowX2) / 2}
		{@const startY = 120}
		{@const gap = 5}
		{@const arrowH = 180}
		{@const arrowW = 40}
		{@const arrowY2 = startY + arrowH}

		<!-- 全体の幅を計算： (個数 * 幅) + (隙間の数 * gap) -->
		{@const totalWidth = arrowW + gap}
		<!-- 左端の開始位置： 中央から全体幅の半分を戻り、最初の矢印の半分を足す -->
		{@const firstX = center - totalWidth / 2 + arrowW / 2}

		<!-- 引力 -->
		<BroadArrow x1={startX} y1={startY} x2={startX} y2={arrowY2} fill="#00885a" />
		<text
			x={startX}
			y={startY + 5}
			writing-mode="vertical-rl"
			font-size="1rem"
			text-anchor="top"
			dominant-baseline="central"
			fill="white">{gravities}</text
		>

		{@const circleR = 50}
		{@const circleY = arrowY2 + circleR + 10}
		<!-- 発生源 -->
		{@const magnetX = center}
		{@const magnetY = circleY - 20}
		<text
			x={magnetX}
			y={magnetY}
			font-size="50"
			text-anchor="middle"
			dominant-baseline="central"
			transform="rotate(180, {magnetX}, {magnetY})"
		>
			🧲
		</text>

		{@const switchX = magnetX + 30}
		{@const switchY = magnetY + 20}
		<text x={switchX} y={switchY} font-size="20" text-anchor="middle" dominant-baseline="central">
			🟢
		</text>

		{@const handX = switchX + 33}
		{@const handY = switchY + 3}
		<text x={handX} y={handY} font-size="70" text-anchor="middle" dominant-baseline="central">
			👈
		</text>

		{@const onX = switchX - 10}
		{@const onY = switchY - 10}
		<g transform="translate({onX}, {onY}) rotate(-10)">
			<!-- ON! 本体 -->
			<text
				font-family="Arial Black, sans-serif"
				font-size="20"
				font-style="italic"
				font-weight="bold"
				fill="#ffcc00"
				stroke="#008cff"
				stroke-width="2"
				stroke-linejoin="round"
				fill-opacity="0.8"
			>
				ON!
			</text>
		</g>

		{@const sourceX = handX + 10}
		{@const sourceY = handY + 15}
		<text
			x={sourceX}
			y={sourceY}
			font-size="1rem"
			text-anchor="left"
			dominant-baseline="central"
			fill="white"
			stroke="#008cff"
			stroke-width="5"
			stroke-linejoin="round"
			style="paint-order: stroke;"
		>
			{#each sources.split('\n') as line, i (line + i)}
				<tspan x={sourceX} dy={i === 0 ? '0' : '1.2em'}>{line}</tspan>
			{/each}
		</text>
	{/if}
</svg>
