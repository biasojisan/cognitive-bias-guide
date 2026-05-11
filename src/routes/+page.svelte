<script lang="ts">
    import { 
        Button,
    } from 'flowbite-svelte';
	import type { PageProps } from './$types';
	import BiasCard from '$lib/components/BiasCard.svelte';
	import SectionBreak from '$lib/components/SectionBreak.svelte';
	import { SITE_NAME, DOMAIN } from '$lib/constants/common-metadata';

    let { data }: PageProps = $props();

    let bigFour = $derived(data.bigFour);

    // OPG設定
    const title = `${SITE_NAME}`;
    const description = `認知バイアス非公式図鑑のメインページです。認知バイアスの基礎知識から、日常生活に潜むバイアスの一覧まで分かりやすく解説。自分の思考のクセを理解し、より良い意思決定に役立てましょう。`;
    const ogpUrl = `${DOMAIN}`;
    const ogpImage = `${DOMAIN}/images/hero.webp`;

</script>

<svelte:head>
    <title>{title}</title>
	<meta name="description" content={description} />

	<!-- OGPの基本設定-->
	<meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogpImage} />
    <meta property="og:url" content={ogpUrl} />

	<!-- X (Twitter) -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogpImage} />
</svelte:head>

<!-- ヒーローセクション -->
<section class="flex flex-col items-center justify-center bg-white py-8 dark:bg-gray-900">
    <div class="relative inline-block">
        
        <!-- 左上：白いフチを2px追加 -->
        <div class="absolute top-0 left-0 p-4 font-bold text-5xl" 
             style="
                -webkit-text-stroke: 10px white; 
                paint-order: stroke fill; 
                color: black;
                "
        >
            バイアスと
        </div>

        <img src="/images/hero.webp" alt="ヒーローイラスト" class="block w-3xs h-auto">

        <!-- 右下：白いフチを2px追加 -->
        <div class="absolute bottom-0 right-0 p-4 font-bold text-5xl" 
             style="
                -webkit-text-stroke: 10px white; 
                paint-order: stroke fill; 
                color: black;
                "
        >
            生きていく
        </div>

    </div>

    <div class="mt-6 flex gap-4">
        <Button href="/bias" color="blue"><ruby>認知<rt>にんち</rt></ruby>バイアスとは</Button>
        <Button href="#list" color="blue">バイアス<ruby>四天王<rt>してんのう</rt></ruby></Button>
    </div>

</section>

<SectionBreak />

<!-- 認知バイアスについて -->
<section class="bg-white py-12 dark:bg-gray-800">
    <div class="mx-auto max-w-2xl px-4 text-center text-lg">
        <div class="my-8">
            <img src="/images/march_of_progress.webp" alt="ヒーローイラスト" class="block w-2xl h-auto mx-auto" />
            <div class="mt-4">
                <ruby>私<rt>わたし</rt></ruby>たちは<ruby>厳<rt>きび</rt></ruby>しい<ruby>自然<rt>しぜん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>を、<ruby>生<rt>い</rt></ruby>き<ruby>抜<rt>ぬ</rt></ruby>いてきました。
            </div>
        </div>
        <div class="mt-20">
            <img src="/images/set_a_trap.webp" alt="ヒーローイラスト" class="block w-2xl h-auto mx-auto" />
            <div class="mt-4">
                その<ruby>過程<rt>かてい</rt></ruby>で、「とても<ruby>便利<rt>べんり</rt></ruby>な<ruby>道具<rt>どうぐ</rt></ruby>」を<ruby>手<rt>て</rt></ruby>に<ruby>入<rt>い</rt></ruby>れました。
            </div>
        </div>
        <div  class="mt-20">
            <img src="/images/automatic_defense.webp" alt="ヒーローイラスト" class="block w-2xl h-auto mx-auto" />
            <div class="mt-4">
                <ruby>長<rt>なが</rt></ruby>い<ruby>年月<rt>ねんげつ</rt></ruby>をかけて、<ruby>無意識<rt>むいしき</rt></ruby>に<ruby>発動<rt>はつどう</rt></ruby>するようになりました。
            </div>
        </div>
        <div class="mt-20">
            <img src="/images/automatic_defense2.webp" alt="ヒーローイラスト" class="block w-2xl h-auto mx-auto" />
            <div  class="mt-4">
                しかし、<ruby>時<rt>とき</rt></ruby>として<ruby>自分<rt>じぶん</rt></ruby>や<ruby>周<rt>まわ</rt></ruby>りを、<ruby>傷<rt>きず</rt></ruby>つける<ruby>原因<rt>げんいん</rt></ruby>にもなってしまったのです。
            </div>
        </div>
        <div class="mt-20">
            <img src="/images/icon-logo.webp" alt="ヒーローイラスト" class="block w-sm h-auto mx-auto" />
            <div>
                それが<strong><ruby>認知<rt>にんち</rt></ruby>バイアス</strong>です。
            </div>
        </div>
        <div class="mt-20">
            <img src="/images/brain_flower.webp" alt="ヒーローイラスト" class="block w-sm h-auto mx-auto" />
            <div>
                <ruby>時間<rt>じかん</rt></ruby>をかけて<ruby>刻<rt>きざ</rt></ruby>み<ruby>込<rt>こ</rt></ruby>まれたこの<ruby>本能<rt>ほんのう</rt></ruby>を、<ruby>消<rt>け</rt></ruby>し<ruby>去<rt>さ</rt></ruby>ることはできません。
            </div>
        </div>
        <div class="mt-20">
            <img src="/images/hero.webp" alt="ヒーローイラスト" class="block w-xs h-auto mx-auto" />
            <div>
                <ruby>傷<rt>きず</rt></ruby>つくことを<ruby>減<rt>へ</rt></ruby>らし、<ruby>心穏<rt>こころおだ</rt></ruby>やかに、<ruby>共<rt>とも</rt></ruby>に<ruby>生<rt>い</rt></ruby>きていく。<br>
                このサイトが、そのためのヒントになれば<ruby>幸<rt>さいわ</rt></ruby>いです。
            </div>
        </div>
    </div>
</section>

<SectionBreak />

<section class="py-16">
    <div class="mx-auto max-w-screen-xl px-4">
        <img src="/images/teaching.webp" alt="黒板の前で認知バイアスの授業をする女の子の画像" class="block w-2xl h-auto mx-auto" />
        
        <div class="flex justify-center mt-4">
            <Button href="/bias" color="blue"><ruby>認知<rt>にんち</rt></ruby>バイアスとは</Button>
        </div>
    </div>
</section>

<SectionBreak />

<!-- バイアス四天王 -->
<section id="list" class="py-16">
    <div class="mx-auto max-w-screen-xl px-4">
        <h2 class="mb-8 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            <span class="underline decoration-amber-400 decoration-8 underline-offset-4">バイアス<ruby>四天王<rt>してんのう</rt></ruby></span>
        </h2>
        <div class="flex flex-wrap justify-center sm:justify-start gap-8">
            {#each bigFour as bias (bias.id)}
                <BiasCard id={bias.id} name={bias.nameJa} summary={bias.summary} thumbnail={bias.thumbnail} />
            {/each}
        </div>
    </div>
</section>


