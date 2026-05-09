<script lang="ts">
	import BiasCard from '$lib/components/BiasCard.svelte';
	import SectionBreak from '$lib/components/SectionBreak.svelte';
import SummaryCard from '$lib/components/SummaryCard.svelte';
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import { stages } from '$lib/constants/bias-evolution-timeline';
	import { biasMeasures } from '$lib/constants/bias-measures';
	import { problemExamples, viciousCycleStageLabels } from '$lib/constants/problem-examples';
import type { PageProps } from './$types';
	import { Badge, Accordion, AccordionItem, Tabs, TabItem, Button } from 'flowbite-svelte';

	let { data } = $props<{data: PageProps}>();

	let bigFour = $derived(data.bigFour);

	const SECTIONS = {
		define: {link:"qa-definition", title:"<ruby>認知<rt>にんち</rt></ruby>バイアスとは？"},
		machanism: {link:"qa-mechanism", title:"なんで<ruby>思<rt>おも</rt></ruby>い<ruby>込<rt>こ</rt></ruby>みや<ruby>感情<rt>かんじょう</rt></ruby>に<ruby>影響<rt>えいきょう</rt></ruby>されちゃうの？"},
		problem: {link:"qa-problems", title:"<ruby>結局<rt>けっきょく</rt></ruby>、<ruby>認知<rt>にんち</rt></ruby>バイアスの<ruby>何<rt>なに</rt></ruby>が<ruby>問題<rt>もんだい</rt></ruby>なの？"},
		risk: {link:"qa-risks", title:"<ruby>抜<rt>ぬ</rt></ruby>け<ruby>出<rt>だ</rt></ruby>せないと、どうなるの？"},
		prevention: {link:"qa-prevention", title:"どうすれば<ruby>防<rt>ふせ</rt></ruby>げるの？"},
		type: {link:"qa-types", title:"<ruby>認知<rt>にんち</rt></ruby>バイアスって100<ruby>種類<rt>しゅるい</rt></ruby><ruby>以上<rt>いじょう</rt></ruby>あるってホント？"},
		evolution: {link:"qa-evolution", title:"<ruby>本<rt>ほん</rt>当<rt>とう</rt></ruby>に<ruby>生<rt>せい</rt>存<rt>ぞん</rt></ruby>に<ruby>有<rt>ゆう</rt>利<rt>り</rt></ruby>だったの？"},
	} as const;
</script>

<svelte:head>
  	<title>認知バイアスとは | 認知バイアス非公式図鑑</title>
	<meta name="description" content="認知バイアスの正体や、なぜ人が思い込みに左右されるのかを初心者向けに分かりやすく解説します。バイアスの問題点や、生存戦略としての背景、日常生活で防ぐための具体的な対策まで、思考の罠から抜け出すヒントが満載です。" />
</svelte:head>

{#snippet sectionTitle(title:string, tag = 'h2')}
	<div class="mb-10 text-center">
		<svelte:element this={tag} class="inline-block relative">
			<!-- 背面の装飾（キラキラ感） -->
			<span class="absolute -top-3 -right-4 text-2xl">✨</span>
			<span class="absolute -bottom-2 -left-3 text-xl rotate-12">⭐</span>
			
			<!-- メインタイトル -->
			<span class="relative z-10 block px-6 py-4 bg-white border-4 border-yellow-300 rounded-full text-3xl font-black text-yellow-700 shadow-[4px_4px_0px_0px_rgba(253,224,71,1)]">
				{@html title}
			</span>
		</svelte:element>
	</div>
{/snippet}


<article class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 space-y-16 text-gray-700 font-sans tracking-wide leading-relaxed">
	
	<TableOfContents baseLink="bias" items={Object.values(SECTIONS)} />

	<!-- 認知バイアスとは -->
	<section id={SECTIONS.define.link} class="space-y-6">
		
		{@render sectionTitle(SECTIONS.define.title, "h1")}
		
		<img src="/images/teaching.webp" alt="黒板の前で認知バイアスの授業をする女の子の画像" />
		<SummaryCard 
			label="ざっくり<ruby>言<rt>い</rt></ruby>うと"
			content = "<ruby>思<rt>おも</rt></ruby>い<ruby>込<rt>こ</rt></ruby>みや<ruby>感情<rt>かんじょう</rt></ruby>に<ruby>影響<rt>えいきょう</rt></ruby>される「<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>のクセ」"
			color = "blue"
		/>
		
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div class="bg-white p-6 rounded-3xl border-2 border-amber-100 shadow-sm overflow-hidden group hover:-translate-y-1 transition-transform">
				<div>Q.なんでそんなクセを<ruby>持<rt>も</rt></ruby>ってるの？</div>
				<h3 class="font-bold text-lg mb-2 text-amber-800">A.<ruby>生<rt>い</rt></ruby>き<ruby>残<rt>のこ</rt></ruby>るために<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>だったからです
				</h3>
				<p class="text-gray-600">
					<ruby>思<rt>おも</rt></ruby>い<ruby>込<rt>こ</rt></ruby>みや<ruby>感<rt>かん</rt></ruby><ruby>情<rt>じょう</rt></ruby>による<ruby>判<rt>はん</rt></ruby><ruby>断<rt>だん</rt></ruby>は、<ruby>進<rt>しん</rt></ruby><ruby>化<rt>か</rt></ruby>の<ruby>過<rt>か</rt></ruby><ruby>程<rt>てい</rt></ruby>で「<ruby>生<rt>せい</rt></ruby><ruby>存<rt>ぞん</rt></ruby>に<ruby>有<rt>ゆう</rt></ruby><ruby>利<rt>り</rt></ruby>」だった<ruby>仕<rt>し</rt></ruby><ruby>組<rt>く</rt></ruby>みです。すべての<ruby>人<rt>ひと</rt></ruby>に<ruby>備<rt>そな</rt></ruby>わっており、<ruby>完<rt>かん</rt></ruby><ruby>全<rt>ぜん</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>除<rt>のぞ</rt></ruby>くことはできません。
				</p>
				<img src="/images/Inherited.webp" alt="原始人の女の子が現代の女の子に宝物を渡している画像" />
			</div>
			<div class="bg-white p-6 rounded-3xl border-2 border-sky-100 shadow-sm overflow-hidden group hover:-translate-y-1 transition-transform">
				<div>Q.どんな<ruby>時<rt>とき</rt></ruby>にそのクセが<ruby>働<rt>はたら</rt></ruby>くの？</div>
				<h3 class="font-bold text-lg mb-2 text-sky-800">Ａ．<ruby>無<rt>む</rt></ruby><ruby>意<rt>い</rt></ruby><ruby>識<rt>しき</rt></ruby>に<ruby>常<rt>つね</rt></ruby>に<ruby>自<rt>じ</rt></ruby><ruby>動<rt>どう</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>いています</h3>
				<p class="text-gray-600">
					<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>では<ruby>論<rt>ろん</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えているつもりでも、あらゆる<ruby>判<rt>はん</rt></ruby><ruby>断<rt>だん</rt></ruby>の<ruby>裏<rt>うら</rt></ruby><ruby>側<rt>がわ</rt></ruby>で、このクセが<ruby>自<rt>じ</rt></ruby><ruby>動<rt>どう</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>影<rt>えい</rt></ruby><ruby>響<rt>きょう</rt></ruby>を<ruby>与<rt>あた</rt></ruby>えています。
				</p>
				<img src="/images/auto_car.webp" alt="自動運転の車に乗っている女の子の画像" />
			</div>
			<div class="bg-white p-6 rounded-3xl border-2 border-emerald-100 shadow-sm overflow-hidden group hover:-translate-y-1 transition-transform">
				<div>Q.<ruby>私<rt>わたし</rt></ruby>はいつも<ruby>冷<rt>れい</rt></ruby><ruby>静<rt>せい</rt></ruby>なので<ruby>大<rt>だい</rt></ruby><ruby>丈<rt>じょう</rt></ruby><ruby>夫<rt>ぶ</rt></ruby>ですよね？</div>
				<h3 class="font-bold text-lg mb-2 text-emerald-800">Ａ．いいえ。<ruby>大<rt>だい</rt></ruby><ruby>丈<rt>じょう</rt></ruby><ruby>夫<rt>ぶ</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>っている<ruby>人<rt>ひと</rt></ruby>ほど<ruby>危<rt>き</rt></ruby><ruby>険<rt>けん</rt></ruby>です</h3>
				<p class="text-gray-600">
					「<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>はバイアスに<ruby>影<rt>えい</rt></ruby><ruby>響<rt>きょう</rt></ruby>されない」と<ruby>考<rt>かんが</rt></ruby>えている<ruby>人<rt>ひと</rt></ruby>ほど、<ruby>実<rt>じっ</rt></ruby><ruby>際<rt>さい</rt></ruby>には<ruby>影<rt>えい</rt></ruby><ruby>響<rt>きょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けやすいことがわかっています。
				</p>
				<img src="/images/confident.webp" alt="自信満々な女の子の後ろに影が迫る画像" />
			</div>
		</div>
		<div class="mt-10 text-xl font-bold text-gray-800 text-center">
			まとめると
		</div>
		<SummaryCard
			label="<ruby>認知<rt>にんち</rt></ruby>バイアスとは"
			content = "<ruby>生存<rt>せいぞん</rt></ruby>のために<ruby>誰<rt>だれ</rt></ruby>もが<ruby>持<rt>も</rt></ruby>つ<ruby>無意識<rt>むいしき</rt></ruby>の<ruby>仕組<rt>しく</rt></ruby>みで、<ruby>自覚<rt>じかく</rt></ruby>していても<ruby>完全<rt>かんぜん</rt></ruby>には<ruby>避<rt>さ</rt></ruby>けられないもの"
		/>
	</section>

	<SectionBreak />

	<!-- 原因：なぜ速く判断しようとするのか -->
	<section id={SECTIONS.machanism.link} class="space-y-6">
		<div class="text-center space-y-4">
			
			{@render sectionTitle(SECTIONS.machanism.title)}
			
			<SummaryCard
				label="ざっくり<ruby>言<rt>い</rt></ruby>うと"
				content = "<ruby>速<rt>はや</rt></ruby>く<ruby>判断<rt>はんだん</rt></ruby>しようとするから"
				color = "blue"
			/>

			<img src="/images/quick_select.webp" alt="猛スピードで仕分けをする女の子の画像" class="w-sm h-auto mx-auto" />

			
			<p class="mt-10 text-xl font-bold text-gray-800 text-center">なぜなら…</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div class="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-amber-100">
				<h3 class="text-xl font-bold text-amber-800 mb-3">1. エネルギーを<ruby>節<rt>せつ</rt></ruby><ruby>約<rt>やく</rt></ruby>したいから</h3>
				<p class="text-gray-600 text-sm">
					<ruby>人<rt>にん</rt></ruby><ruby>間<rt>げん</rt></ruby>の<ruby>脳<rt>のう</rt></ruby>は<ruby>体<rt>からだ</rt></ruby><ruby>全<rt>ぜん</rt></ruby><ruby>体<rt>たい</rt></ruby>の<ruby>約<rt>やく</rt></ruby>20%ものエネルギーを<ruby>消<rt>しょう</rt></ruby><ruby>費<rt>ひ</rt></ruby>します。<ruby>昔<rt>むかし</rt></ruby>の<ruby>過<rt>か</rt></ruby><ruby>酷<rt>こく</rt></ruby>な<ruby>環<rt>かん</rt></ruby><ruby>境<rt>きょう</rt></ruby>では、エネルギーを<ruby>節<rt>せつ</rt></ruby><ruby>約<rt>やく</rt></ruby>できる<ruby>人<rt>にん</rt></ruby><ruby>間<rt>げん</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>が<ruby>生<rt>い</rt></ruby>き<ruby>残<rt>のこ</rt></ruby>るのに<ruby>有<rt>ゆう</rt></ruby><ruby>利<rt>り</rt></ruby>でした。そのため「たくさんの<ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>めて<ruby>慎<rt>しん</rt></ruby><ruby>重<rt>ちょう</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べる」ことは<ruby>避<rt>さ</rt></ruby>けるようになりました。
				</p>
				<img src="/images/lazy_girl.webp" alt="寝てる原始人の女の子の画像" />
			</div>
			<div class="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-sky-100">
				<h3 class="text-xl font-bold text-sky-800 mb-3">2. <ruby>危<rt>き</rt></ruby><ruby>険<rt>けん</rt></ruby>に<ruby>素<rt>す</rt></ruby><ruby>早<rt>ばや</rt></ruby>く<ruby>対<rt>たい</rt></ruby><ruby>処<rt>しょ</rt></ruby>したいから</h3>
				<p class="text-gray-600 text-sm">
					<ruby>昔<rt>むかし</rt></ruby>の<ruby>環<rt>かん</rt></ruby><ruby>境<rt>きょう</rt></ruby>には、<ruby>死<rt>し</rt></ruby>に<ruby>直<rt>ちょく</rt></ruby><ruby>結<rt>けつ</rt></ruby>する<ruby>危<rt>き</rt></ruby><ruby>険<rt>けん</rt></ruby>がたくさんありました。<ruby>目<rt>め</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>の<ruby>危<rt>き</rt></ruby><ruby>機<rt>き</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して「<ruby>過<rt>か</rt></ruby><ruby>去<rt>こ</rt></ruby>の<ruby>記<rt>き</rt></ruby><ruby>憶<rt>おく</rt></ruby>や<ruby>感<rt>かん</rt></ruby><ruby>情<rt>じょう</rt></ruby>」をヒントに、<ruby>瞬<rt>しゅん</rt></ruby><ruby>時<rt>じ</rt></ruby>に<ruby>反<rt>はん</rt></ruby><ruby>応<rt>のう</rt></ruby>できる<ruby>個<rt>こ</rt></ruby><ruby>体<rt>たい</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>が、より<ruby>多<rt>おお</rt></ruby>く<ruby>生<rt>い</rt></ruby>き<ruby>残<rt>のこ</rt></ruby>ることができました。
				</p>
				<img src="/images/running_away.webp" alt="茂みに潜む猛獣から逃げる原始人の女の子の画像" />
			</div>
		</div>

		<div class="mt-10 text-xl font-bold text-gray-800 text-center">
			ようするに
		</div>

		<SummaryCard
			label="<ruby>思<rt>おも</rt></ruby>い<ruby>込<rt>こ</rt></ruby>みや<ruby>感情<rt>かんじょう</rt></ruby>に<ruby>影響<rt>えいきょう</rt></ruby>されるのは<br>"
			content = "<ruby>少<rt>すこ</rt></ruby>しくらい<ruby>間違<rt>まちが</rt></ruby>っててもいいから、<ruby>時間<rt>じかん</rt></ruby>とエネルギーを<ruby>使<rt>つか</rt></ruby>わずに、<ruby>及第点<rt>きゅうだいてん</rt></ruby>の<ruby>答<rt>こた</rt></ruby>えを<ruby>出<rt>だ</rt></ruby>そうとするから"
		/>
	</section>

	<SectionBreak />

	<!-- 日常の問題とループ構造 -->
	<section id={SECTIONS.problem.link} class="">

		{@render sectionTitle(SECTIONS.problem.title)}
		
		<SummaryCard
			label="ざっくり<ruby>言<rt>い</rt></ruby>うと"
			content = "<ruby>放<rt>ほう</rt></ruby>っておくと、どんどん「<ruby>思<rt>おも</rt></ruby>い<ruby>込<rt>こ</rt></ruby>み」が<ruby>大<rt>おお</rt></ruby>きくなるのが<ruby>問題<rt>もんだい</rt></ruby>"
			color = "blue"
		/>
		
		<p class="mt-10 mb-8 text-xl font-bold text-gray-800 text-center">
			なんで<ruby>大<rt>おお</rt></ruby>きくなるの？
		</p>

		<div class="relative border-l-2 border-blue-400 pb-6 pl-6">
            <div
                class="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-blue-400 shadow-sm"
            ></div>
            <h3 class="mb-2 flex items-center text-lg font-bold text-blue-900">
                <span class="mr-2">01. <ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby>のフィルタリング</span>
            </h3>
            <div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <div class="mb-1 text-base font-bold text-blue-600">
                    
                </div>
                <div class="text-base leading-relaxed text-slate-600">
                    <ruby>脳<rt>のう</rt></ruby>はエネルギーを<ruby>節<rt>せつ</rt></ruby><ruby>約<rt>やく</rt></ruby>するため、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>にとって<ruby>都<rt>つ</rt></ruby><ruby>合<rt>ごう</rt></ruby>の<ruby>良<rt>よ</rt></ruby>い<ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby>だけを<ruby>認<rt>にん</rt></ruby><ruby>識<rt>しき</rt></ruby>し、それ<ruby>以<rt>い</rt></ruby><ruby>外<rt>がい</rt></ruby>を<ruby>無<rt>む</rt></ruby><ruby>視<rt>し</rt></ruby>しようとします。
                </div>
				<img src="/images/filter.webp" alt="フィルターを持って色々な図形を選別している女の子の画像" class="mt-6 w-sm h-auto mx-auto" />
            </div>
        </div>

        <div class="relative border-l-2 border-indigo-400 pb-6 pl-6">
            <div
                class="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-indigo-400 shadow-sm"
            ></div>
            <h3 class="mb-2 flex items-center text-lg font-bold text-indigo-900">
                <span class="mr-2">02. <ruby>自<rt>じ</rt></ruby><ruby>信<rt>しん</rt></ruby>の<ruby>強<rt>きょう</rt></ruby><ruby>化<rt>か</rt></ruby></span>
            </h3>
            <div class="mb-2 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <div class="text-base leading-relaxed text-slate-600">
                    <ruby>入<rt>はい</rt></ruby>ってきた<ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby>が<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>考<rt>かんが</rt></ruby>えを<ruby>裏<rt>うら</rt></ruby><ruby>付<rt>づ</rt></ruby>けるものばかりになるため、「やっぱり<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>は<ruby>正<rt>ただ</rt></ruby>しい！」と<ruby>自<rt>じ</rt></ruby><ruby>信<rt>しん</rt></ruby>を<ruby>深<rt>ふか</rt></ruby>めます。<ruby>反<rt>はん</rt></ruby><ruby>対<rt>たい</rt></ruby><ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>が<ruby>入<rt>はい</rt></ruby>ってきても、<ruby>脳<rt>のう</rt></ruby>はそれを<ruby>修<rt>しゅう</rt></ruby><ruby>正<rt>せい</rt></ruby>するエネルギーを<ruby>嫌<rt>いや</rt></ruby>がり、「<ruby>不<rt>ふ</rt></ruby><ruby>快<rt>かい</rt></ruby><ruby>感<rt>かん</rt></ruby>」として<ruby>拒<rt>きょ</rt></ruby><ruby>絶<rt>ぜつ</rt></ruby>します。
                </div>
	            <img src="/images/mirror.webp" alt="鏡を見て私は正しいと思っている女の子と迫りくる雲の画像" />
            </div>
        </div>

        <div class="relative border-l-2 border-purple-400 pb-6 pl-6">
            <div
                class="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-purple-400 shadow-sm"
            ></div>
            <h3 class="mb-2 flex items-center text-lg font-bold text-purple-900">
                <span class="mr-2">03. <ruby>環<rt>かん</rt></ruby><ruby>境<rt>きょう</rt></ruby>の<ruby>構<rt>こう</rt></ruby><ruby>築<rt>ちく</rt></ruby></span>
            </h3>
            <div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <div class="text-base leading-relaxed text-slate-600">
                    <ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>考<rt>かんが</rt></ruby>えを<ruby>肯<rt>こう</rt></ruby><ruby>定<rt>てい</rt></ruby>してくれる<ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby><ruby>源<rt>げん</rt></ruby>や<ruby>人<rt>ひと</rt></ruby>とばかり<ruby>繋<rt>つな</rt></ruby>がるようになり、<ruby>周<rt>まわ</rt></ruby>りの<ruby>環<rt>かん</rt></ruby><ruby>境<rt>きょう</rt></ruby><ruby>自<rt>じ</rt></ruby><ruby>体<rt>たい</rt></ruby>が<ruby>偏<rt>かたよ</rt></ruby>っていきます。そして、さらに「1. <ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby>のフィルタリング」が<ruby>強<rt>つよ</rt></ruby>まるという<span class="text-pink-700 font-bold">「<ruby>負<rt>ふ</rt></ruby>のループ」</span>に<ruby>陥<rt>おちい</rt></ruby>ります。
                </div>
				<img src="/images/loop.webp" alt="地獄へ続く螺旋階段を下りている女の子の画像" class="mt-6" />
            </div>
        </div>


		<div class="text-center">
			<div class="mt-10 text-xl font-bold text-gray-800 text-center">ようするに</div>
			
			<SummaryCard
				label="<ruby>認知<rt>にんち</rt></ruby>バイアスは"
				content = "<ruby>単<rt>たん</rt></ruby>なるミスではなく、<ruby>一度<rt>いちど</rt></ruby>ハマると<ruby>抜<rt>ぬ</rt></ruby>け<ruby>出<rt>だ</rt></ruby>すのが<ruby>非常<rt>ひじょう</rt></ruby>に<ruby>難<rt>むずか</rt></ruby>しい「<ruby>負<rt>ふ</rt></ruby>のループ」に<ruby>陥<rt>おちい</rt></ruby>るのが<ruby>問題<rt>もんだい</rt>"
			/>
		</div>
	</section>

	<SectionBreak />

	<!-- 具体例 (Tabs) -->
	<section id={SECTIONS.risk.link} class="space-y-6">

		{@render sectionTitle(SECTIONS.risk.title)}
		
		<SummaryCard
			label="<ruby>早<rt>はや</rt></ruby>く<ruby>抜<rt>ぬ</rt></ruby>け<ruby>出<rt>だ</rt></ruby>さないと"
			content = "とても<ruby>大<rt>おお</rt></ruby>きな<ruby>問題<rt>もんだい</rt></ruby>に<ruby>発展<rt>はってん</rt></ruby>します"
			color = "blue"
		/>

		<p class="mt-10 text-xl font-bold text-gray-800 text-center">
			たとえば...
		</p>

		<div class="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
			<Tabs style="underline" class="p-2 bg-gray-50 border-b border-gray-200">
				{#each problemExamples as example, index}
					<TabItem open={index === 0}>
						{#snippet titleSlot()}
							{@html example.title}
						{/snippet}
						<div class="p-4 sm:p-6 space-y-4">
							<h3 class="font-bold text-lg text-purple-800 border-b pb-2">
								{@html example.label}
							</h3>
							<div class="grid gap-3 text-sm">
								{#each example.steps as step, i}
									<div class="bg-purple-50 p-4 rounded-xl">
										<Badge color="purple" class="mb-2">
											{@html viciousCycleStageLabels[i]}
										</Badge>
										<p>
											{@html step}
										</p>
									</div>
								{/each}
								<img src={example.img} alt={example.alt} class="mt-6" />
							</div>
						</div>
					</TabItem>
				{/each}
			</Tabs>
		</div>

		<SummaryCard
			label="<ruby>抜<rt>ぬ</rt></ruby>け<ruby>出<rt>だ</rt></ruby>せないと"
			content = "<ruby>客観性<rt>きゃっかんせい</rt></ruby>を<ruby>失<rt>うしな</rt></ruby>い、<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>や<ruby>自分<rt>じぶん</rt></ruby>の<ruby>人生<rt>じんせい</rt></ruby>を、<ruby>破壊<rt>はかい</rt></ruby>するまで<ruby>止<rt>と</rt></ruby>まれなくなります"
		/>

	</section>

	<SectionBreak />

	<!-- 対策と注意点 -->
	 <section id={SECTIONS.prevention.link} class="space-y-6">
		<div class="text-center space-y-4 mb-8">
			
			{@render sectionTitle(SECTIONS.prevention.title)}

			<SummaryCard
				label="まずは"
				content = "<ruby>自分<rt>じぶん</rt></ruby>を<ruby>疑<rt>うたが</rt></ruby>う<ruby>仕組み<rt>しくみ</rt></ruby>を、<ruby>意図的<rt>いとてき</rt></ruby>に<ruby>作<rt>つく</rt></ruby>ってみましょう"
				color = "blue"
			/>
			<p class="mt-10 text-xl font-bold text-gray-800 text-center">
				<ruby>具<rt>ぐ</rt></ruby><ruby>体<rt>たい</rt></ruby><ruby>的<rt>てき</rt></ruby>には…
			</p>
		</div>

		<Accordion flush class="bg-white rounded-2xl shadow-sm overflow-hidden">
			{#each biasMeasures as biasMeasure}
				<AccordionItem class="p-4">
					{#snippet header()}
						<span class="text-lg font-bold flex items-center gap-2 text-indigo-900">
							{@html biasMeasure.title}
						</span>
					{/snippet}
					
					<div class="space-y-3 text-gray-600 text-sm p-2">
						<p>
							{@html biasMeasure.description}
						</p>
						<img src={biasMeasure.img} alt={biasMeasure.alt} class="mt-6" />
						<div class="bg-red-50 p-3 rounded-lg border border-red-100">
							<strong class="text-red-700 flex items-center gap-1">ここに<ruby>注<rt>ちゅう</rt></ruby><ruby>意<rt>い</rt></ruby>！</strong>
							<ul class="list-disc pl-5 mt-1 space-y-1">
								{#each biasMeasure.notices as notice}
									<li>
										{@html notice}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</AccordionItem>
			{/each}
		</Accordion>

		<div class="mt-10 text-xl font-bold text-gray-800 text-center">
			まとめると
		</div>

		<SummaryCard
			label="<ruby>認知<rt>にんち</rt></ruby>バイアスを<ruby>防<rt>ふせ</rt></ruby>ぐには"
			content = "「バイアスを<ruby>無<rt>な</rt></ruby>くす」のではなく、<ruby>暴走<rt>ぼうそう</rt></ruby>しにくい<ruby>環境<rt>かんきょう</rt></ruby>をつくることが<ruby>大切<rt>たいせつ</rt></ruby>"
		/>
	</section>

	<SectionBreak />

	<section id={SECTIONS.type.link} class="space-y-6">
		<div class="text-center space-y-4 mb-8">
			{@render sectionTitle(SECTIONS.type.title)}

			<SummaryCard
				label="ホントだけど"
				content = "どれも<ruby>似<rt>に</rt></ruby>たようなもんです"
				color = "blue"
			/>

			

		</div>

		<div>
			<ruby>本<rt>ほん</rt></ruby>ページを<ruby>読<rt>よ</rt></ruby>めば、<ruby>認知<rt>にんち</rt></ruby>バイアスの<ruby>基本<rt>きほん</rt></ruby>は<ruby>十分<rt>じゅうぶん</rt></ruby><ruby>理解<rt>りかい</rt></ruby>できます。<br>
    		<ruby>気<rt>き</rt></ruby>になる<ruby>人<rt>ひと</rt></ruby>はとりあえず、<span class="font-bold">「キング・オブ・バイアス」「<ruby>認知<rt>にんち</rt></ruby>バイアスの<ruby>母<rt>はは</rt></ruby>」</span>と<ruby>言<rt>い</rt></ruby>われている、<strong class="font-bold text-red-600"><ruby>確証<rt>かくしょう</rt></ruby>バイアス</strong>を<ruby>調<rt>しら</rt></ruby>べてみてはいかがでしょうか？
		</div>

		<div class="mx-auto w-sm">
			<BiasCard
				id={bigFour[0].id}
				name={bigFour[0].nameJa}
				summary={bigFour[0].summary}
				thumbnail={bigFour[0].thumbnail}
			/>
		</div>

		<SummaryCard
			label="たくさん<ruby>種類<rt>しゅるい</rt></ruby>があるけど"
			content = "メカニズムはだいたい<ruby>一緒<rt>いっしょ</rt></ruby>"
			color = "orange"
		/>
	</section>

	<SectionBreak />

	<section id={SECTIONS.evolution.link} class="space-y-6">
		<div class="mx-autop x-4 py-12">
			{@render sectionTitle(SECTIONS.evolution.title)}

			<SummaryCard
				label="<ruby>本<rt>ほん</rt>当<rt>とう</rt></ruby>です"
				content = "<ruby>遥<rt>はる</rt></ruby>か<ruby>昔<rt>むかし</rt></ruby>から、バイアスの<ruby>種<rt>たね</rt></ruby>は<ruby>存<rt>そん</rt>在<rt>ざい</rt></ruby>していました"
				color = "blue"
			/>

			<div class="my-10 text-center text-xl font-bold">
				<ruby>進化<rt>しんか</rt></ruby>の<ruby>歴史<rt>れきし</rt></ruby>を<ruby>見<rt>み</rt></ruby>てみましょう
			</div>

			<div class="relative">
				{#each stages as stage, index}
					<!--- 最後の要素の下部には余白をつけない --->
					<div class="relative border-l-2 border-blue-400 pb-6 pl-6" class:pb-0={index === stages.length - 1}>
						<!--- ドット --->
						<div
							class="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-blue-400 shadow-sm"
						></div>

						<!--- タイトル & 時期 --->
						<h3 class="mb-2 items-center text-lg font-bold text-blue-900">
							{@html stage.title}
						</h3>
						<p class="mb-4 text-sm font-medium text-blue-500/80">{@html stage.period}</p>
						<!--- サマリーセクション --->
						<div class="mb-4 text-base leading-relaxed text-slate-700">
							{@html stage.summary}
						</div>
						<!--- 画像 --->
						<div class="">
							<img
								src={stage.img}
								alt={stage.alt}
								class="mx-auto h-auto w-sm"
							/>
						</div>
						<!--- 機能一覧 --->
						<div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
							{#each stage.functions as func}
								<div class="mb-3 last:mb-0">
									<div class="mb-1 text-base font-bold text-blue-600">
										{@html func.name}
									</div>
									<div class="text-base leading-relaxed text-slate-600">
										{@html func.description}
									</div>
								</div>
							{/each}

							<!--- キーワード（#を除いて表示） --->
							<div class="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-3">
								{#each stage.keywords as keyword}
									<span
										class="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
									>
										{@html keyword.replace('#', '')}
									</span>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>

			<SummaryCard
				label="<ruby>進<rt>しん</rt>化<rt>か</rt></ruby>の<ruby>歴<rt>れき</rt>史<rt>し</rt></ruby>から<ruby>見<rt>み</rt></ruby>れば"
				content = "「<ruby>論<rt>ろん</rt>理<rt>り</rt>的<rt>てき</rt></ruby>な<ruby>思<rt>し</rt>考<rt>こう</rt></ruby>」は、<ruby>赤<rt>あか</rt></ruby>ちゃんみたいなもの"
				color = "orange"
			/>
		</div>
	</section>

</article>
