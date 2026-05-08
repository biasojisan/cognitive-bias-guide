<script lang="ts">
	let {
		x1,
		y1,
		x2,
		y2,
		lineW = 20,
		arrowW = 40,
		arrowH = 20,
		fill = 'white'
	}: {
		x1: number;
		y1: number;
		x2: number;
		y2: number;
		lineW?: number;
		arrowW?: number;
		arrowH?: number;
		fill?: string;
	} = $props();

	const lx1 = x1 - lineW / 2; // <!-- 左上の角 -->
	const lx2 = x1 + lineW / 2; // <!-- 右上の角 -->
	const ay = y2 - arrowH; //    <!-- 矢印の付け根の高さ -->
	const ax1 = x2 - arrowW / 2; // <!-- 矢印の左端 -->
	const ax2 = x2 + arrowW / 2; // <!-- 矢印の右端 -->
</script>

<path
	d="
        M {lx1} {y1} 
        L {lx2} {y1} 
        L {lx2} {ay} 
        L {ax2} {ay} 
        L {x2} {y2} 
        L {ax1} {ay} 
        L {lx1} {ay} 
        Z
    "
	{fill}
	stroke="black"
	stroke-width="1"
/>
