<script lang="ts">
	let {
		x,
		y,
		name
	}: {
		x: number;
		y: number;
		name: string;
	} = $props();

	const OffsetX = 5;
	const OffsetY = -5;
	const ChartLength = 100;
	const ZoneLength = 40;
	const CenterPointX = ChartLength / 2 + OffsetX;
	const CenterPointY = ChartLength / 2 + OffsetY;
	const AxisFontSize = 7;
	const PlotFontSize = 5;
	const ZoneFontSize = 5;
	const FontMargin = 2;
	const LabelMargin = 5;
	const LineOffset = 3;
	const ChartLineWidth = 0.2;

	const PlotMax = 10;
	const PlotMin = -10;

	const unitSize = ZoneLength / PlotMax;

	function getPlotCoordinates(x: number, y: number) {
		// 中心点から計算
		const svgX = CenterPointX + x * unitSize;
		const svgY = CenterPointY + y * unitSize;

		return { x: svgX, y: svgY };
	}

	const plotCoordinates = getPlotCoordinates(x, y);
</script>

<svg viewBox="0 0 {ChartLength} {ChartLength}">
	<rect x="0" y="0" width="100" height="100" fill="white" stroke-width="1" stroke="" />

	<!-- 第一象限(右上)-->
	<rect
		x={CenterPointX}
		y={CenterPointY - ZoneLength}
		width={ZoneLength}
		height={ZoneLength}
		fill="#EFE6E6"
		stroke-width={ChartLineWidth}
		stroke=""
	/>

	<!-- 第二象限(左上)-->
	<rect
		x={CenterPointX - ZoneLength}
		y={CenterPointY - ZoneLength}
		width={ZoneLength}
		height={ZoneLength}
		fill="#EDF9F4"
		stroke-width={ChartLineWidth}
		stroke=""
	/>

	<!-- 第三象限(左下)-->
	<rect
		x={CenterPointX - ZoneLength}
		y={CenterPointY}
		width={ZoneLength}
		height={ZoneLength}
		fill="#FFFEF2"
		stroke-width={ChartLineWidth}
		stroke=""
	/>

	<!-- 第四象限(右下)-->
	<rect
		x={CenterPointX}
		y={CenterPointY}
		width={ZoneLength}
		height={ZoneLength}
		fill="#DAD5E0"
		stroke-width={ChartLineWidth}
		stroke=""
	/>

	<!-- 矢印↑ -->
	<line
		x1={CenterPointX - ZoneLength - LineOffset}
		y1={CenterPointY}
		x2={CenterPointX - ZoneLength - LineOffset}
		y2={CenterPointY - ZoneLength}
		stroke="black"
		stroke-width={ChartLineWidth}
	/>
	<line
		x1={CenterPointX - ZoneLength - LineOffset}
		y1={CenterPointY - ZoneLength}
		x2={CenterPointX - ZoneLength - LineOffset - 2}
		y2={CenterPointY - ZoneLength + 2}
		stroke="black"
		stroke-width={ChartLineWidth}
	/>
	<line
		x1={CenterPointX - ZoneLength - LineOffset}
		y1={CenterPointY - ZoneLength}
		x2={CenterPointX - ZoneLength - LineOffset + 2}
		y2={CenterPointY - ZoneLength + 2}
		stroke="black"
		stroke-width={ChartLineWidth}
	/>

	<!-- 矢印↓ -->
	<line
		x1={CenterPointX - ZoneLength - LineOffset}
		y1={CenterPointY}
		x2={CenterPointX - ZoneLength - LineOffset}
		y2={CenterPointY + ZoneLength}
		stroke="black"
		stroke-width={ChartLineWidth}
	/>
	<line
		x1={CenterPointX - ZoneLength - LineOffset}
		y1={CenterPointY + ZoneLength}
		x2={CenterPointX - ZoneLength - LineOffset - 2}
		y2={CenterPointY + ZoneLength - 2}
		stroke="black"
		stroke-width={ChartLineWidth}
	/>
	<line
		x1={CenterPointX - ZoneLength - LineOffset}
		y1={CenterPointY + ZoneLength}
		x2={CenterPointX - ZoneLength - LineOffset + 2}
		y2={CenterPointY + ZoneLength - 2}
		stroke="black"
		stroke-width={ChartLineWidth}
	/>

	<!-- 矢印← -->
	<line
		x1={CenterPointX}
		y1={CenterPointY + ZoneLength + LineOffset}
		x2={CenterPointX - ZoneLength}
		y2={CenterPointY + ZoneLength + LineOffset}
		stroke="black"
		stroke-width={ChartLineWidth}
	/>
	<line
		x1={CenterPointX - ZoneLength}
		y1={CenterPointY + ZoneLength + LineOffset}
		x2={CenterPointX - ZoneLength + 2}
		y2={CenterPointY + ZoneLength + LineOffset - 2}
		stroke="black"
		stroke-width={ChartLineWidth}
	/>
	<line
		x1={CenterPointX - ZoneLength}
		y1={CenterPointY + ZoneLength + LineOffset}
		x2={CenterPointX - ZoneLength + 2}
		y2={CenterPointY + ZoneLength + LineOffset + 2}
		stroke="black"
		stroke-width={ChartLineWidth}
	/>

	<!-- 矢印→ -->
	<line
		x1={CenterPointX}
		y1={CenterPointY + ZoneLength + LineOffset}
		x2={CenterPointX + ZoneLength}
		y2={CenterPointY + ZoneLength + LineOffset}
		stroke="black"
		stroke-width={ChartLineWidth}
	/>
	<line
		x1={CenterPointX + ZoneLength}
		y1={CenterPointY + ZoneLength + LineOffset}
		x2={CenterPointX + ZoneLength - 2}
		y2={CenterPointY + ZoneLength + LineOffset - 2}
		stroke="black"
		stroke-width={ChartLineWidth}
	/>
	<line
		x1={CenterPointX + ZoneLength}
		y1={CenterPointY + ZoneLength + LineOffset}
		x2={CenterPointX + ZoneLength - 2}
		y2={CenterPointY + ZoneLength + LineOffset + 2}
		stroke="black"
		stroke-width={ChartLineWidth}
	/>

	<!-- 直感的 -->
	<text
		x={CenterPointX - ZoneLength - AxisFontSize / 2 - LabelMargin}
		y={CenterPointY - ZoneLength / 2}
		writing-mode="vertical-rl"
		font-size={AxisFontSize}
		text-anchor="middle"
		dominant-baseline="center"
		fill="gray">直感的</text
	>

	<!-- 論理的 -->
	<text
		x={CenterPointX - ZoneLength - AxisFontSize / 2 - LabelMargin}
		y={CenterPointY + ZoneLength / 2}
		writing-mode="vertical-rl"
		font-size={AxisFontSize}
		text-anchor="middle"
		dominant-baseline="center"
		fill="gray">論理的</text
	>

	<!-- 情報収集 -->
	<text
		x={CenterPointX - ZoneLength / 2}
		y={CenterPointY + ZoneLength + (AxisFontSize + LabelMargin)}
		font-size={AxisFontSize}
		text-anchor="middle"
		dominant-baseline="middle"
		fill="gray">情報収集</text
	>

	<!-- 意思決定 -->
	<text
		x={CenterPointX + ZoneLength / 2}
		y={CenterPointY + ZoneLength + (AxisFontSize + LabelMargin)}
		font-size={AxisFontSize}
		text-anchor="middle"
		dominant-baseline="middle"
		fill="gray">意思決定</text
	>

	<!-- 錯覚の罠 -->
	<text
		x={CenterPointX - ZoneLength / 2}
		y={CenterPointY - ZoneLength + (AxisFontSize - FontMargin)}
		font-size={ZoneFontSize}
		text-anchor="middle"
		dominant-baseline="middle"
		fill="gray"
    >
        第一印象
    </text>

	<!-- 省エネの罠 -->
	<text
		x={CenterPointX + ZoneLength / 2}
		y={CenterPointY - ZoneLength + (AxisFontSize - FontMargin)}
		font-size={ZoneFontSize}
		text-anchor="middle"
		dominant-baseline="middle"
		fill="gray"
    >
        省エネ判断
    </text>

	<!-- 偏食の罠 -->
	<text
		x={CenterPointX - ZoneLength / 2}
		y={CenterPointY + (AxisFontSize - FontMargin)}
		font-size={ZoneFontSize}
		text-anchor="middle"
		dominant-baseline="middle"
		fill="gray"
    >
        偏った分析
    </text>

	<!-- 執着の罠 -->
	<text
		x={CenterPointX + ZoneLength / 2}
		y={CenterPointY + (AxisFontSize - FontMargin)}
		font-size={ZoneFontSize}
		text-anchor="middle"
		dominant-baseline="middle"
		fill="gray"
    >
        執着
    </text>

	<!-- プロット -->
	<circle
		cx={plotCoordinates.x}
		cy={plotCoordinates.y}
		r="1"
		fill="#f74800"
		stroke="#f74800"
		stroke-width={ChartLineWidth}
	/>

	<!-- 名前 -->
    <foreignObject
        x={plotCoordinates.x- (100 / 2)} 
        y={plotCoordinates.y + AxisFontSize / 2 + FontMargin - 5}
        width="100" 
        height="40"
    >
        <div xmlns="http://w3.org" style="
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: {PlotFontSize}px;
            color: #f74800;
            text-align: center;
            line-height: 1.2;
        ">
            {@html name}
        </div>
    </foreignObject>
</svg>
