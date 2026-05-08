<script lang="ts">
	let {
		x1,
		y1,
		x2,
		y2,
		isStart = true,
		isEnd = true,
		strokeDasharray = undefined
	}: {
		x1: number;
		y1: number;
		x2: number;
		y2: number;
		isStart?: boolean;
		isEnd?: boolean;
		strokeDasharray?: number | undefined;
	} = $props();

	const ARROW_SIZE = 5;
</script>

<defs>
	<marker
		id="arrowhead"
		markerWidth={ARROW_SIZE}
		markerHeight={ARROW_SIZE}
		refX={ARROW_SIZE}
		refY={ARROW_SIZE / 2}
		/* 始点側が自動で反転 */
		orient="auto-start-reverse"
	>
		<path d={`M 0 0 L ${ARROW_SIZE} ${ARROW_SIZE / 2} L 0 ${ARROW_SIZE} z`} fill="currentColor" />
	</marker>
</defs>

<line
	{x1}
	{y1}
	{x2}
	{y2}
	stroke="currentColor"
	stroke-width="1"
	stroke-dasharray={strokeDasharray}
	marker-start={isStart ? 'url(#arrowhead)' : ''}
	marker-end={isEnd ? 'url(#arrowhead)' : ''}
/>
