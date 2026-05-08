<script lang="ts">
    import SectionBreak from '$lib/components/SectionBreak.svelte';
import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<svelte:head>
  	<title>このサイトについて | 認知バイアス非公式図鑑</title>
    <meta name="description" content="「認知バイアス非公式図鑑」の制作背景や運営者・バイアスおじさんの想いを掲載したページです。本サイトはAIを活用して情報を収集しており、「情報を疑うこと」を通じて認知バイアス対策の第一歩を体験していただくことを目的としています。" />
</svelte:head>

<article class="mx-auto max-w-prose px-5 py-10 text-gray-800 leading-relaxed">
    
    <!-- タイトル -->
    <h1 class="text-3xl font-extrabold tracking-tight mb-10 border-b-4 border-pink-500 pb-2">
        このサイトについて
    </h1>

    <section class="my-6">
        <div>
            <p class="mb-4">
                <ruby>認知<rt>にんち</rt></ruby>バイアス<ruby>非公式<rt>ひこうしき</rt></ruby><ruby>図鑑<rt>ずかん</rt></ruby>(<ruby>以下<rt>いか</rt></ruby>、<ruby>本<rt>ほん</rt></ruby>サイト)は、<ruby>認知<rt>にんち</rt></ruby>バイアスに<ruby>関<rt>かん</rt></ruby>する<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>掲載<rt>けいさい</rt></ruby>しているサイトです
            </p>
            <ul class="list-disc ml-6 grid gap-2">
                <li>
                    そもそも<ruby>認知<rt>にんち</rt></ruby>バイアスってなんざんしょという<ruby>人<rt>ひと</rt></ruby>は、<a href="/bias" class="text-blue-500 underline">「<ruby>認知<rt>にんち</rt></ruby>バイアスとは」</a>をご<ruby>覧<rt>らん</rt></ruby>ください。
                </li>
                <li>
                    <ruby>個別<rt>こべつ</rt></ruby>の<ruby>認知<rt>にんち</rt></ruby>バイアスについて<ruby>知<rt>し</rt></ruby>りたい<ruby>人<rt>ひと</rt></ruby>は、<a href="/#list" class="text-blue-500 underline">「バイアス<ruby>四天王<rt>してんのう</rt></ruby>」</a>から、<ruby>個別<rt>こべつ</rt></ruby>の<ruby>解説<rt>かいせつ</rt></ruby>ページをご<ruby>覧<rt>らん</rt></ruby>ください。
                </li>
            </ul>
        </div>
    </section>

    <SectionBreak />

    <section class="my-6">
        <h2 class="text-xl font-bold mb-4 flex items-center">
            <span class="w-1.5 h-6 bg-pink-500 mr-2 rounded-full"></span>
            <ruby>製作<rt>せいさく</rt></ruby><ruby>方法<rt>ほうほう</rt></ruby>と「<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>」
        </h2>
        <div class="space-y-4">
            <p>
                <ruby>本<rt>ほん</rt></ruby>サイトの<ruby>情報<rt>じょうほう</rt></ruby>は、<ruby>基本<rt>きほん</rt></ruby>的にAIを<ruby>使<rt>つか</rt></ruby>って<ruby>収集<rt>しゅうしゅう</rt></ruby>しています。<ruby>私<rt>わたし</rt></ruby><ruby>自身<rt>じしん</rt></ruby>で<ruby>厳密<rt>げんみつ</rt></ruby>なエビデンスの<ruby>検証<rt>けんしょう</rt></ruby>や<ruby>論文<rt>ろんぶん</rt></ruby>チェックをしていません。
            </p>
            <p class="text-indigo-800 font-bold bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-400">
                「それ、<ruby>本当<rt>ほんとう</rt></ruby>？」と<ruby>疑<rt>うたが</rt></ruby>うこと<ruby>自体<rt>じたい</rt></ruby>が、<ruby>認知<rt>にんち</rt></ruby>バイアス<ruby>対策<rt>たいさく</rt></ruby>の<ruby>第一歩<rt>だいいっぽ</rt></ruby>です。
            </p>
            <p class="text-gray-600">
                <ruby>本<rt>ほん</rt></ruby>サイトに<ruby>書<rt>か</rt></ruby>いてあることを<ruby>鵜呑<rt>うの</rt></ruby>みにせず、<ruby>疑問<rt>ぎもん</rt></ruby>に<ruby>思<rt>おも</rt></ruby>ったことは<ruby>自分<rt>じぶん</rt></ruby>で<ruby>調<rt>しら</rt></ruby>べてみましょう。
            </p>
        </div>
        <img src="/images/question.png" alt="女の子が本を読んで疑問を抱いている画像" />
    </section>

    <SectionBreak />

    <!-- 免責事項 -->
    <section id="disclaimer" class="my-6 p-5 bg-gray-100 rounded-lg  leading-relaxed text-gray-600">
        <h2 class="font-bold mb-2 text-gray-800 text-xl"><ruby>免責<rt>めんせき</rt></ruby><ruby>事項<rt>じこう</rt></ruby></h2>
        <p>
            <ruby>本<rt>ほん</rt></ruby>サイトに<ruby>掲載<rt>けいさい</rt></ruby>されている<ruby>情報源<rt>じょうほうげん</rt></ruby>はAIによって<ruby>生成<rt>せいせい</rt></ruby>されたものであり、<ruby>正確<rt>せいかく</rt></ruby><ruby>性<rt>せい</rt></ruby>を<ruby>保証<rt>ほしょう</rt></ruby>するものではありません。<ruby>情報<rt>じょうほう</rt></ruby>の<ruby>利用<rt>りよう</rt></ruby>による<ruby>損害<rt>そんがい</rt></ruby>について、<ruby>運営<rt>うんえい</rt></ruby><ruby>者<rt>しゃ</rt></ruby>は<ruby>一切<rt>いっさい</rt></ruby>の<ruby>責任<rt>せきにん</rt></ruby>を<ruby>負<rt>お</rt></ruby>いかねます。<ruby>最終<rt>さいしゅう</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>判断<rt>はんだん</rt></ruby>はご<ruby>自身<rt>じしん</rt></ruby>の<ruby>責任<rt>せきにん</rt></ruby>において<ruby>行<rt>おこな</rt></ruby>ってください。
        </p>
    </section>

        <SectionBreak />

    <section class="my-6">
        <h2 class="text-xl font-bold mb-4 flex items-center">
            <span class="w-1.5 h-6 bg-pink-500 mr-2 rounded-full"></span>
            <ruby>運営者<rt>うんえいしゃ</rt></ruby>
        </h2>
        <img src="/images/bias_ojisan.png" alt="バイアスおじさんの画像" class="w-3xs h-auto mx-auto" />
        
        <!-- sm:grid-cols-2 を削除しました -->
        <div class="grid gap-y-3 md:text-base">
            <div class="flex border-b border-gray-50 pb-2">
                <span class="font-bold w-24 shrink-0 text-gray-500">
                    <ruby>名前<rt>なまえ</rt></ruby>
                </span>
                <span>
                    バイアスおじさん（1986<ruby>年<rt>ねん</rt></ruby><ruby>生<rt>う</rt></ruby>まれ）
                </span>
            </div>
            <div class="flex border-b border-gray-50 pb-2">
                <span class="font-bold w-24 shrink-0 text-gray-500">
                    <ruby>経歴<rt>けいれき</rt></ruby>
                </span>
                <span>
                    26<ruby>歳<rt>さい</rt></ruby>から<ruby>無職<rt>むしょく</rt></ruby>(<ruby>社会<rt>しゃかい</rt></ruby><ruby>人<rt>じん</rt></ruby><ruby>経験<rt>けいけん</rt></ruby><ruby>有<rt>あ</rt></ruby>り)
                </span>
            </div>
            <div class="flex border-b border-gray-50 pb-2">
                <span class="font-bold w-24 shrink-0 text-gray-500">
                    <ruby>好物<rt>こうぶつ</rt></ruby>
                </span>
                <span>
                    <ruby>卵<rt>たまご</rt></ruby>かけ<ruby>納豆<rt>なっとう</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>(ネギ<ruby>入<rt>い</rt></ruby>れ)、ぶどう、<ruby>柑橘<rt>かんきつ</rt></ruby><ruby>類<rt>るい</rt></ruby>
                </span>
            </div>
        </div>
    </section>

        <SectionBreak />

    <!-- 製作のきっかけ -->
    <section class="my-6">
        <h2 class="text-xl font-bold mb-4 flex items-center">
            <span class="w-1.5 h-6 bg-pink-500 mr-2 rounded-full"></span>
            <ruby>製作<rt>せいさく</rt></ruby>のきっかけ
        </h2>

        <div class="relative border-l-2 border-blue-400 pb-6 pl-6">
            <div
                class="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-blue-400 shadow-sm"
            ></div>
            <h3 class="mb-2 flex items-center text-lg font-bold text-blue-900">
                <span class="mr-2">01.<ruby>幸<rt>しあわ</rt></ruby>せとは？</span>
            </h3>
            <div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <div class="mb-1 text-base font-bold text-blue-600">
                    
                </div>
                <div class="text-base leading-relaxed text-slate-600">
                    <ruby>幸福<rt>こうふく</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>を<ruby>調<rt>しら</rt></ruby>べたところ、<span class="font-semibold text-indigo-700">「<ruby>誰<rt>だれ</rt></ruby>かの<ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>っている」</span>という<ruby>貢献<rt>こうけん</rt></ruby><ruby>感<rt>かん</rt></ruby>が<ruby>必須<rt>ひっす</rt></ruby>だと<ruby>知<rt>し</rt></ruby>る。
                </div>
            </div>
        </div>

        <div class="relative border-l-2 border-indigo-400 pb-6 pl-6">
            <div
                class="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-indigo-400 shadow-sm"
            ></div>
            <h3 class="mb-2 flex items-center text-lg font-bold text-indigo-900">
                <span class="mr-2">02.<ruby>人<rt>ひと</rt></ruby>として</span>
            </h3>
            <div class="mb-2 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <div class="text-base leading-relaxed text-slate-600">
                    4つのAIに<span class="font-semibold text-indigo-700">「<ruby>人<rt>ひと</rt></ruby>として<ruby>生<rt>う</rt></ruby>まれたからには<ruby>知<rt>し</rt></ruby>っておくべきことは？」</span>と<ruby>質問<rt>しつもん</rt></ruby>したところ、<ruby>総合<rt>そうごう</rt></ruby>1<ruby>位<rt>い</rt></ruby>が<span class="font-bold text-red-500">「<ruby>認知<rt>にんち</rt></ruby>バイアスとその<ruby>対策<rt>たいさく</rt></ruby><ruby>法<rt>ほう</rt></ruby>」</span>だった。
                </div>
            </div>
            <img src="/images/ask.png" alt="女の子が4つのAIに質問している画像" />
        </div>

        <div class="relative border-l-2 border-purple-400 pb-6 pl-6">
            <div
                class="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-purple-400 shadow-sm"
            ></div>
            <h3 class="mb-2 flex items-center text-lg font-bold text-purple-900">
                <span class="mr-2">03. <ruby>予想<rt>よそう</rt></ruby></span>
            </h3>
            <div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <div class="text-base leading-relaxed text-slate-600">
                    <ruby>認知<rt>にんち</rt></ruby>バイアスに<ruby>関<rt>かん</rt></ruby>するサイトを<ruby>作<rt>つく</rt></ruby>れば
                    <ul class="list-none  list-outside">
                        <li class="flex items-start">
                            <span class="mr-2 flex-shrink-0">→</span>
                            <span><span class="text-indigo-700"><ruby>勉強<rt>べんきょう</rt></ruby>になる</span>(アウトプットは<ruby>大事<rt>だいじ</rt></ruby>)</span>
                        </li>
                        <li class="flex items-start">
                            <span class="mr-2 flex-shrink-0">→</span>
                            <span><span class="text-red-500">みんなのためになる</span>(AIが<ruby>言<rt>い</rt></ruby>ってるんだから<ruby>間違<rt>まちが</rt></ruby>いない<span class="text-white">←バイアス</span>)</span>
                        </li>
                        <ul class="list-none  list-outside ml-4 ">
                            <li class="flex items-start">
                                <span class="mr-2 flex-shrink-0">→</span>
                                <span>だから<span class="font-semibold text-indigo-700"><ruby>貢献<rt>こうけん</rt></ruby><ruby>感<rt>かん</rt></ruby></span>を<ruby>持<rt>も</rt></ruby>てる</span>
                            </li>
                            <ul class="list-none  list-outside ml-4 ">
                                <li class="flex items-start">
                                    <span class="mr-2 flex-shrink-0">→</span>
                                    <span>ってことは<span class="font-semibold text-red-500"><ruby>幸<rt>しあわ</rt></ruby>せ</span>になれる？</span>
                                </li>
                            </ul>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>

        <div class="relative pl-6">
            <div
                class="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-orange-400 shadow-sm"
            ></div>
            <h3 class="mb-2 flex items-center text-lg font-bold text-orange-900">
                <span class="mr-2">04. <ruby>実行<rt>じっこう</rt></ruby></span>
            </h3>
            <div
                class="mb-2 rounded-2xl border border-orange-100 bg-white p-4 shadow-sm ring-1 ring-orange-200"
            >
                <div class="text-base leading-relaxed text-slate-600">
                    <ruby>暇<rt>ひま</rt></ruby>だしとりあえず<ruby>作<rt>つく</rt></ruby>ってみて、<ruby>幸<rt>しあわ</rt></ruby>せになれるか<ruby>検証<rt>けんしょう</rt></ruby>してみよっと♪←<span class="italic font-bold text-red-500">いまココ</span>
                </div>
            </div>
            <img src="/images/play_blocks.png" alt="積み木で遊ぶ女の子の画像" />
        </div>
    </section>

</article>
