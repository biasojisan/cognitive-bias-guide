// --- Type Definition ---
interface TimelineFunction {
    name: string;
    description: string;
}

interface TimelineStage {
    title: string;
    period: string;
    summary: string;
    img: string;
    alt: string;
    functions: TimelineFunction[];
    keywords: string[];
}

// --- Data ---
export const stages: TimelineStage[] = [
    {
        title: '<ruby>第<rt>だい</rt></ruby>1<ruby>段階<rt>だんかい</rt></ruby>：<ruby>非<rt>ひ</rt></ruby><ruby>生命<rt>せいめい</rt></ruby>と<ruby>生命<rt>せいめい</rt></ruby>の<ruby>境界<rt>きょうかい</rt></ruby> ─「<ruby>偏<rt>かたよ</rt></ruby>り」と「<ruby>死<rt>し</rt></ruby>」の<ruby>誕生<rt>たんじょう</rt></ruby>',
        period: '<ruby>約<rt>やく</rt></ruby>40<ruby>億<rt>おく</rt></ruby><ruby>年<rt>ねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>（<ruby>冥王代<rt>めいおうだい</rt></ruby>〜<ruby>太古代<rt>たいこだい</rt></ruby><ruby>初期<rt>しょき</rt></ruby>）',
        summary: '<ruby>地球<rt>ちきゅう</rt></ruby>が<ruby>誕生<rt>たんじょう</rt></ruby>して<ruby>間<rt>ま</rt></ruby>もない、まだ「<ruby>生<rt>い</rt></ruby>き<ruby>物<rt>もの</rt></ruby>」がいなかった<ruby>時代<rt>じだい</rt></ruby>です。<ruby>熱<rt>あつ</rt></ruby>い<ruby>海<rt>うみ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>でバラバラだった<ruby>分子<rt>ぶんし</rt></ruby>が、<ruby>偶然<rt>ぐうぜん</rt></ruby><ruby>集<rt>あつ</rt></ruby>まって「<ruby>自分<rt>じぶん</rt></ruby>をコピーする<ruby>仕組<rt>しく</rt></ruby>み」や「<ruby>膜<rt>まく</rt></ruby>の<ruby>袋<rt>ふくろ</rt></ruby>」のような<ruby>構造<rt>こうぞう</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ったと<ruby>考<rt>かんが</rt></ruby>えられています。ここからが、ただの<ruby>物質<rt>ぶっしつ</rt></ruby>が「<ruby>生<rt>い</rt></ruby>きているように<ruby>振<rt>ふ</rt></ruby>る<ruby>舞<rt>ま</rt></ruby>う<ruby>存在<rt>そんざい</rt></ruby>」へと<ruby>変<rt>か</rt></ruby>わり<ruby>始<rt>はじ</rt></ruby>めた、<ruby>命<rt>いのち</rt></ruby>のスタート<ruby>地点<rt>ちてん</rt></ruby>です。',
        img: '/images/rna.png',
        alt: 'RNAの一本鎖の画像',
        functions: [
            {
                name: '<ruby>自分<rt>じぶん</rt></ruby>をコピーする<ruby>力<rt>ちから</rt></ruby>と、あえての<ruby>間違<rt>まちが</rt></ruby>い（<ruby>自己複製<rt>じこふくせい</rt></ruby>とエラー<ruby>閾値<rt>いきち</rt></ruby>）',
                description:
                    '<ruby>自分<rt>じぶん</rt></ruby>の<ruby>情報<rt>じょうほう</rt></ruby>をコピーして<ruby>増<rt>ふ</rt></ruby>える<ruby>機能<rt>きのう</rt></ruby>です（RNAの<ruby>自己複製<rt>じこふくせい</rt></ruby><ruby>系<rt>けい</rt></ruby>）。ただし、<ruby>完璧<rt>かんぺき</rt></ruby>すぎると<ruby>多様性<rt>たようせい</rt></ruby>が<ruby>生<rt>う</rt></ruby>まれず<ruby>進化<rt>しんか</rt></ruby>しにくく、<ruby>間違<rt>まちが</rt></ruby>いすぎると<ruby>情報<rt>じょうほう</rt></ruby>が<ruby>維持<rt>いじ</rt></ruby>できません。「だいたい<ruby>正<rt>ただ</rt></ruby>しく、たまに<ruby>間違<rt>まちが</rt></ruby>える」というバランスが、<ruby>進化<rt>しんか</rt></ruby>において<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>条件<rt>じょうけん</rt></ruby>（エラー<ruby>閾値<rt>いきち</rt></ruby>）になりました。'
            },
            {
                name: '「<ruby>自分<rt>じぶん</rt></ruby>」と「<ruby>外<rt>そと</rt></ruby>」を<ruby>分<rt>わ</rt></ruby>ける<ruby>壁<rt>かべ</rt></ruby>（<ruby>区画化<rt>くかくか</rt></ruby>）',
                description:
                    '<ruby>油<rt>あぶら</rt></ruby>のような<ruby>成分<rt>せいぶん</rt></ruby>が<ruby>集<rt>あつ</rt></ruby>まって、シャボン<ruby>玉<rt>だま</rt></ruby>のような<ruby>膜<rt>まく</rt></ruby>（<ruby>脂肪酸<rt>しぼうさん</rt></ruby><ruby>小胞<rt>しょうほう</rt></ruby>など）を<ruby>作<rt>つく</rt></ruby>る<ruby>現象<rt>げんしょう</rt></ruby>です。これによって、<ruby>膜<rt>まく</rt></ruby>の<ruby>内側<rt>うちがわ</rt></ruby>が「<ruby>内部<rt>ないぶ</rt></ruby>」、<ruby>外側<rt>そとがわ</rt></ruby>が「<ruby>環境<rt>かんきょう</rt></ruby>」という<ruby>区別<rt>くべつ</rt></ruby>が<ruby>生<rt>う</rt></ruby>まれました。この<ruby>区別<rt>くべつ</rt></ruby>が<ruby>維持<rt>いじ</rt></ruby>できなくなることは、<ruby>原始的<rt>げんしてき</rt></ruby>な<ruby>意味<rt>いみ</rt></ruby>での「<ruby>存在<rt>そんざい</rt></ruby>の<ruby>終<rt>お</rt></ruby>わり」とみなすことができます。'
            },
            {
                name: '「これだ！」と<ruby>決<rt>き</rt></ruby>める、えり<ruby>好<rt>ごの</rt></ruby>み<ruby>戦略<rt>せんりゃく</rt></ruby>（<ruby>基質選好性<rt>きしつせんこうせい</rt></ruby>）',
                description:
                    '<ruby>何<rt>なに</rt></ruby>にでも<ruby>反応<rt>はんのう</rt></ruby>するのではなく、<ruby>特定<rt>とくてい</rt></ruby>の<ruby>相手<rt>あいて</rt></ruby>と<ruby>反応<rt>はんのう</rt></ruby>しやすい<ruby>分子<rt>ぶんし</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>です。これは<ruby>結果的<rt>けっかてき</rt></ruby>にエネルギー<ruby>効率<rt>こうりつ</rt></ruby>を<ruby>高<rt>たか</rt></ruby>めます。この「<ruby>特定<rt>とくてい</rt></ruby>のものに<ruby>偏<rt>かたよ</rt></ruby>って<ruby>反応<rt>はんのう</rt></ruby>する」という<ruby>性質<rt>せいしつ</rt></ruby>は、のちの<ruby>選択性<rt>せんたくせい</rt></ruby>やバイアスの<ruby>遠<rt>とお</rt></ruby>い<ruby>原型<rt>げんけい</rt></ruby>と<ruby>考<rt>かんが</rt></ruby>えることができます。'
            }
        ],
        keywords: ['#RNAワールド', '#<ruby>自己複製<rt>じこふくせい</rt></ruby>', '#エラー<ruby>閾値<rt>いきち</rt></ruby>', '#<ruby>脂肪酸<rt>しぼうさん</rt></ruby><ruby>小胞<rt>しょうほう</rt></ruby>', '#<ruby>基質選好性<rt>きしつせんこうせい</rt></ruby>', '#<ruby>選択圧<rt>せんたくあつ</rt></ruby>']
    },
    {
        title: '<ruby>第<rt>だい</rt></ruby>2<ruby>段階<rt>だんかい</rt></ruby>：<ruby>原始的<rt>げんしてき</rt></ruby>な<ruby>感覚<rt>かんかく</rt></ruby>と「<ruby>記憶<rt>きおく</rt></ruby>なき<ruby>学習<rt>がくしゅう</rt></ruby>」 ─<ruby>絶対評価<rt>ぜったいひょうか</rt></ruby>の<ruby>放棄<rt>ほうき</rt></ruby>',
        period: '<ruby>約<rt>やく</rt></ruby>35<ruby>億<rt>おく</rt></ruby><ruby>年<rt>ねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>〜（<ruby>原核生物<rt>げんかくせいぶつ</rt></ruby>の<ruby>誕生<rt>たんじょう</rt></ruby><ruby>以降<rt>いこう</rt></ruby>）',
        summary: '<ruby>単細胞生物<rt>たんさいぼうせいぶつ</rt></ruby>（バクテリアなど）が<ruby>登場<rt>とうじょう</rt></ruby>し、エサを<ruby>探<rt>さが</rt></ruby>して<ruby>移動<rt>いどう</rt></ruby>し<ruby>始<rt>はじ</rt></ruby>めた<ruby>時代<rt>じだい</rt></ruby>です。この<ruby>頃<rt>ころ</rt></ruby>の<ruby>生命<rt>せいめい</rt></ruby>は「<ruby>今<rt>いま</rt></ruby>、<ruby>状況<rt>じょうきょう</rt></ruby>が<ruby>良<rt>よ</rt></ruby>くなっているか？」という<ruby>変化<rt>へんか</rt></ruby>に<ruby>注目<rt>ちゅうもく</rt></ruby>する<ruby>仕組<rt>しく</rt></ruby>みを<ruby>手<rt>て</rt></ruby>に<ruby>入<rt>い</rt></ruby>れました。これが、のちに<ruby>私<rt>わたし</rt></ruby>たちが「<ruby>全体<rt>ぜんたい</rt></ruby>を<ruby>見<rt>み</rt></ruby>ずに、<ruby>一部<rt>いちぶ</rt></ruby>の<ruby>差<rt>さ</rt></ruby>だけに<ruby>反応<rt>はんのう</rt></ruby>してしまう」ルーツになります。',
        img: '/images/unicellular_organism.jpeg',
        alt: 'いろいろな単細胞生物のイラストの画像',
        functions: [
            {
                name: 'エサを<ruby>見<rt>み</rt></ruby>つけて<ruby>動<rt>うご</rt></ruby>くスイッチ（<ruby>走化性<rt>そうかせい</rt></ruby>とシグナル<ruby>伝達<rt>でんたつ</rt></ruby>）',
                description:
                    '<ruby>体<rt>からだ</rt></ruby>の<ruby>表面<rt>ひょうめん</rt></ruby>にあるセンサーで<ruby>周<rt>まわ</rt></ruby>りの<ruby>化学物質<rt>かがくぶっしつ</rt></ruby>（エサや<ruby>毒<rt>どく</rt></ruby>）をキャッチし、その<ruby>情報<rt>じょうほう</rt></ruby>をバケツリレーのように<ruby>伝<rt>つた</rt></ruby>えて、しっぽのような<ruby>毛<rt>け</rt></ruby>（べん<ruby>毛<rt>もう</rt></ruby>）を<ruby>動<rt>うご</rt></ruby>かす<ruby>機能<rt>きのう</rt></ruby>です。これが「<ruby>周<rt>まわ</rt></ruby>りを<ruby>感<rt>かん</rt></ruby>じて<ruby>動<rt>うご</rt></ruby>く」という<ruby>感覚<rt>かんかく</rt></ruby>の<ruby>始<rt>はじ</rt></ruby>まりです。'
            },
            {
                name: '「<ruby>今<rt>いま</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>」より「<ruby>増<rt>ふ</rt></ruby>えたか」に<ruby>反応<rt>はんのう</rt></ruby>するクセ（メチル<ruby>化<rt>か</rt></ruby>による<ruby>感覚<rt>かんかく</rt></ruby>の<ruby>完全<rt>かんぜん</rt></ruby><ruby>適応<rt>てきおう</rt></ruby>）',
                description:
                    'エサがずっと<ruby>同<rt>おな</rt></ruby>じ<ruby>濃<rt>こ</rt></ruby>さだと、センサーをわざと<ruby>鈍<rt>にぶ</rt></ruby>らせる<ruby>仕組<rt>しく</rt></ruby>み（メチル<ruby>化<rt>か</rt></ruby>）です。これにより「<ruby>今<rt>いま</rt></ruby>どれくらいあるか（<ruby>絶対値<rt>ぜったいち</rt></ruby>）」ではなく「さっきより<ruby>増<rt>ふ</rt></ruby>えたか（<ruby>変化率<rt>へんかりつ</rt></ruby>）」しか<ruby>気<rt>き</rt></ruby>にしなくなりました。これが、<ruby>差<rt>さ</rt></ruby>だけに<ruby>注目<rt>ちゅうもく</rt></ruby>してしまうバイアスの<ruby>始<rt>はじ</rt></ruby>まりです。'
            },
            {
                name: 'エネルギーの<ruby>増減<rt>ぞうげん</rt></ruby>で<ruby>決<rt>き</rt></ruby>まる「<ruby>好<rt>す</rt></ruby>き・<ruby>嫌<rt>きら</rt></ruby>い」（<ruby>前生命的<rt>ぜんせいめいてき</rt></ruby>な「<ruby>価値<rt>かち</rt></ruby>」の<ruby>割<rt>わ</rt></ruby>り<ruby>当<rt>あ</rt></ruby>て）',
                description:
                    '<ruby>体<rt>からだ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>のエネルギー（ATPやプロトン<ruby>駆動力<rt>くどうりょく</rt></ruby>）が<ruby>増<rt>ふ</rt></ruby>えているか<ruby>減<rt>へ</rt></ruby>っているかをチェックする<ruby>機能<rt>きのう</rt></ruby>です。<ruby>増<rt>ふ</rt></ruby>えれば「いい<ruby>感<rt>かん</rt></ruby>じ（<ruby>快<rt>かい</rt></ruby>）」、<ruby>減<rt>へ</rt></ruby>れば「ヤバい（<ruby>不快<rt>ふかい</rt></ruby>）」という、のちの「<ruby>感情<rt>かんじょう</rt></ruby>」の<ruby>超<rt>ちょう</rt></ruby>シンプルな<ruby>先祖<rt>せんぞ</rt></ruby>が<ruby>生<rt>う</rt></ruby>まれました。'
            }
        ],
        keywords: [
            '#<ruby>大腸菌<rt>だいちょうきん</rt></ruby>',
            '#<ruby>走化性<rt>そうかせい</rt></ruby>',
            '#シグナル<ruby>伝達<rt>でんたつ</rt></ruby>',
            '#メチル<ruby>化<rt>か</rt></ruby>',
            '#<ruby>感覚適応<rt>かんかくてきおう</rt></ruby>',
            '#<ruby>絶対評価<rt>ぜったいひょうか</rt></ruby>の<ruby>放棄<rt>ほうき</rt></ruby>',
            '#フレーミング<ruby>効果<rt>こうか</rt></ruby>の<ruby>原型<rt>げんけい</rt></ruby>'
        ]
    },
    {
        title: '<ruby>第<rt>だい</rt></ruby>3<ruby>段階<rt>だんかい</rt></ruby>：<ruby>神経系<rt>しんけいけい</rt></ruby>の<ruby>誕生<rt>たんじょう</rt></ruby>と<ruby>予測<rt>よそく</rt></ruby>エンジン ─<ruby>世界<rt>せかい</rt></ruby>を<ruby>結<rt>むす</rt></ruby>びつける<ruby>魔法<rt>まほう</rt></ruby>',
        period: '<ruby>約<rt>やく</rt></ruby>6<ruby>億<rt>おく</rt></ruby><ruby>年<rt>ねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>〜（エディアカラ<ruby>紀<rt>き</rt></ruby>〜カンブリア<ruby>紀<rt>き</rt></ruby> / <ruby>多細胞動物<rt>たさいぼうどうぶつ</rt></ruby>の<ruby>出現<rt>しゅつげん</rt></ruby>）',
        summary: 'ヒドラやプラナリアのように、<ruby>複雑<rt>ふくざつ</rt></ruby>な<ruby>体<rt>からだ</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ<ruby>動物<rt>どうぶつ</rt></ruby>が<ruby>登場<rt>とうじょう</rt></ruby>した<ruby>時代<rt>じだい</rt></ruby>です。<ruby>全身<rt>ぜんしん</rt></ruby>に<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>える「<ruby>神経<rt>しんけい</rt></ruby>」ができたことで、バラバラだった<ruby>細胞<rt>さいぼう</rt></ruby>がチームとして<ruby>動<rt>うご</rt></ruby>けるようになりました。「もし〜なら、こうなる」という<ruby>未来<rt>みらい</rt></ruby>の<ruby>予測<rt>よそく</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めたのもこの<ruby>頃<rt>ころ</rt></ruby>です。',
        img: '/images/planarian.jpeg',
        alt: 'ヒドラとプラナリアのイラストの画像',
        functions: [
            {
                name: '<ruby>全身<rt>ぜんしん</rt></ruby>をチームとして<ruby>動<rt>うご</rt></ruby>かすネットワーク（<ruby>神経網<rt>しんけいもう</rt></ruby>による<ruby>自発的行動<rt>じはつてきこうどう</rt></ruby>の<ruby>調節<rt>ちょうせつ</rt></ruby>）',
                description:
                    '<ruby>神経<rt>しんけい</rt></ruby>ペプチド（RFamideなど）という<ruby>化学物質<rt>かがくぶっしつ</rt></ruby>をメッセージにして、<ruby>全身<rt>ぜんしん</rt></ruby>の<ruby>細胞<rt>さいぼう</rt></ruby>に「<ruby>動<rt>うご</rt></ruby>け！」と<ruby>命令<rt>めいれい</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>える<ruby>機能<rt>きのう</rt></ruby>です。これにより、ただ<ruby>流<rt>なが</rt></ruby>されるのではなく、<ruby>自分<rt>じぶん</rt></ruby>で<ruby>考<rt>かんが</rt></ruby>えて<ruby>体全体<rt>からだぜんたい</rt></ruby>を<ruby>動<rt>うご</rt></ruby>かせるようになりました（<ruby>収縮<rt>しゅうしゅく</rt></ruby>や<ruby>摂食<rt>せっしょく</rt></ruby>）。'
            },
            {
                name: '「あれが<ruby>起<rt>お</rt></ruby>きれば、これが<ruby>起<rt>お</rt></ruby>きる」という<ruby>学習<rt>がくしゅう</rt></ruby>（<ruby>連合学習<rt>れんごうがくしゅう</rt></ruby>）',
                description:
                    '<ruby>同時<rt>どうじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きた<ruby>出来事<rt>できごと</rt></ruby>をセットで<ruby>覚<rt>おぼ</rt></ruby>える<ruby>脳<rt>のう</rt></ruby>の<ruby>基本<rt>きほん</rt></ruby>ルール（ヘッブ<ruby>則<rt>そく</rt></ruby>）です。<ruby>細胞<rt>さいぼう</rt></ruby>がもともと<ruby>持<rt>も</rt></ruby>っていた、<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>形<rt>かたち</rt></ruby>にする<ruby>仕組<rt>しく</rt></ruby>み（cAMP-PKA-CREB<ruby>経路<rt>けいろ</rt></ruby>など、<ruby>多<rt>おお</rt></ruby>くの<ruby>生<rt>い</rt></ruby>き<ruby>物<rt>もの</rt></ruby>に<ruby>広<rt>ひろ</rt></ruby>く<ruby>共通<rt>きょうつう</rt></ruby>する<ruby>仕組<rt>しく</rt></ruby>み）を<ruby>応用<rt>おうよう</rt></ruby>して、<ruby>神経<rt>しんけい</rt></ruby>のつながりを<ruby>強<rt>つよ</rt></ruby>くし、<ruby>過去<rt>かこ</rt></ruby>の<ruby>経験<rt>けいけん</rt></ruby>から<ruby>未来<rt>みらい</rt></ruby>を<ruby>予測<rt>よそく</rt></ruby>できるようになりました。ただし、たまたま<ruby>起<rt>お</rt></ruby>きた<ruby>無関係<rt>むかんけい</rt></ruby>なことも<ruby>結<rt>むす</rt></ruby>びつけて<ruby>信<rt>しん</rt></ruby>じ<ruby>込<rt>こ</rt></ruby>んでしまう「<ruby>迷信行動<rt>めいしんこうどう</rt></ruby>」というバイアスも<ruby>同時<rt>どうじ</rt></ruby>に<ruby>生<rt>う</rt></ruby>まれました。'
            }
        ],
        keywords: [
            '#<ruby>散在神経網<rt>さんざいしんけいもう</rt></ruby>',
            '#<ruby>集中神経節<rt>しゅうちゅうしんけいせつ</rt></ruby>',
            '#<ruby>神経<rt>しんけい</rt></ruby>ペプチド',
            '#<ruby>連合学習<rt>れんごうがくしゅう</rt></ruby>',
            '#ヘッブ<ruby>則<rt>そく</rt></ruby>',
            '#cAMP-PKA-CREB<ruby>経路<rt>けいろ</rt></ruby>',
            '#<ruby>迷信行動<rt>めいしんこうどう</rt></ruby>'
        ]
    },
    {
        title: '<ruby>第<rt>だい</rt></ruby>4<ruby>段階<rt>だんかい</rt></ruby>：<ruby>定位反射<rt>ていいはんしゃ</rt></ruby>と<ruby>注意<rt>ちゅうい</rt></ruby>の<ruby>資源化<rt>しげんか</rt></ruby> ─<ruby>情報<rt>じょうほう</rt></ruby>の<ruby>取捨選択<rt>しゅしゃせんたく</rt></ruby>',
        period: '<ruby>約<rt>やく</rt></ruby>5<ruby>億<rt>おく</rt></ruby><ruby>年<rt>ねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>〜（<ruby>脊椎動物<rt>せきついどうぶつ</rt></ruby>の<ruby>進化初期<rt>しんかしょき</rt></ruby>）',
        summary: '<ruby>魚<rt>さかな</rt></ruby>の<ruby>先祖<rt>せんぞ</rt></ruby>のような<ruby>背骨<rt>せぼね</rt></ruby>のある<ruby>動物<rt>どうぶつ</rt></ruby>が<ruby>登場<rt>とうじょう</rt></ruby>し、<ruby>目<rt>め</rt></ruby>や<ruby>耳<rt>みみ</rt></ruby>が<ruby>発達<rt>はったつ</rt></ruby>した<ruby>時代<rt>じだい</rt></ruby>です。<ruby>入<rt>はい</rt></ruby>ってくる<ruby>情報<rt>じょうほう</rt></ruby>があまりに<ruby>多<rt>おお</rt></ruby>すぎたため、<ruby>脳<rt>のう</rt></ruby>は「すべてを<ruby>平等<rt>びょうどう</rt></ruby>に<ruby>見<rt>み</rt></ruby>る」ことをやめました。「<ruby>大事<rt>だいじ</rt></ruby>そうなものだけをえこひいきして<ruby>見<rt>み</rt></ruby>る」という、<ruby>情報<rt>じょうほう</rt></ruby>の<ruby>節約術<rt>せつやくじゅつ</rt></ruby>を<ruby>身<rt>み</rt></ruby>につけたのです。',
        img: '/images/sacabambaspis.jpeg',
        alt: 'サカバンバスピスのイラストの画像',
        functions: [
            {
                name: '<ruby>反射的<rt>はんしゃてき</rt></ruby>に「パッ」と<ruby>振<rt>ふ</rt></ruby>り<ruby>向<rt>む</rt></ruby>く<ruby>力<rt>ちから</rt></ruby>（<ruby>定位反射<rt>ていいはんしゃ</rt></ruby>）',
                description:
                    '<ruby>突然<rt>とつぜん</rt></ruby>の<ruby>音<rt>おと</rt></ruby>や<ruby>光<rt>ひかり</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して、<ruby>無意識<rt>むいしき</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>を<ruby>向<rt>む</rt></ruby>ける<ruby>機能<rt>きのう</rt></ruby>です。<ruby>脳<rt>のう</rt></ruby>の<ruby>根<rt>ね</rt></ruby>っこ（<ruby>網様体賦活系<rt>もうようたいふかつけい</rt></ruby>）や<ruby>中脳<rt>ちゅうのう</rt></ruby>（<ruby>上丘<rt>じょうきゅう</rt></ruby>）という<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>い、<ruby>考<rt>かんが</rt></ruby>えるよりも<ruby>早<rt>はや</rt></ruby>く「<ruby>何<rt>なに</rt></ruby>が<ruby>起<rt>お</rt></ruby>きた！？」と<ruby>注目<rt>ちゅうもく</rt></ruby>します。<ruby>生<rt>い</rt></ruby>き<ruby>残<rt>のこ</rt></ruby>るために「まずは<ruby>見<rt>み</rt></ruby>る」という<ruby>自動<rt>じどう</rt></ruby>スイッチができました。'
            },
            {
                name: '「<ruby>目立<rt>めだ</rt></ruby>つもの」の<ruby>強調表示<rt>きょうちょうひょうじ</rt></ruby>（サリエンスマップ）',
                description:
                    '<ruby>世界<rt>せかい</rt></ruby>をありのまま<ruby>映<rt>うつ</rt></ruby>すのではなく、「<ruby>生存<rt>せいぞん</rt></ruby>に<ruby>関<rt>かか</rt></ruby>わりそうな<ruby>目立<rt>めだ</rt></ruby>つもの」だけを<ruby>脳内<rt>のうない</rt></ruby>で<ruby>目立<rt>めだ</rt></ruby>たせる<ruby>機能<rt>きのう</rt></ruby>です。この「<ruby>目立<rt>めだ</rt></ruby>つものを<ruby>優先<rt>ゆうせん</rt></ruby>する」<ruby>仕組<rt>しく</rt></ruby>みが、のちに「<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>しやすい<ruby>情報<rt>じょうほう</rt></ruby>だけで<ruby>判断<rt>はんだん</rt></ruby>してしまう（<ruby>利用可能性<rt>りようかのうせい</rt></ruby>ヒューリスティック）」や「<ruby>派手<rt>はで</rt></ruby>なものに<ruby>騙<rt>だま</rt></ruby>される（<ruby>顕著性<rt>けんちょせい</rt></ruby>バイアス）」といった<ruby>偏<rt>かたよ</rt></ruby>りを<ruby>生<rt>う</rt></ruby>みました。'
            }
        ],
        keywords: [
            '#<ruby>網様体賦活系<rt>もうようたいふかつけい</rt></ruby>',
            '#<ruby>上丘<rt>じょうきゅう</rt></ruby>',
            '#<ruby>定位反射<rt>ていいはんしゃ</rt></ruby>',
            '#サリエンスマップ',
            '#<ruby>利用可能性<rt>りようかのうせい</rt></ruby>ヒューリスティック',
            '#<ruby>顕著性<rt>けんちょせい</rt></ruby>バイアス'
        ]
    },
    {
        title: '<ruby>第<rt>だい</rt></ruby>5<ruby>段階<rt>だんかい</rt></ruby>：<ruby>感情<rt>かんじょう</rt></ruby>プロトタイプと「<ruby>身体予算<rt>しんたいよさん</rt></ruby>」<ruby>管理<rt>かんり</rt></ruby> ─<ruby>損失回避<rt>そんしつかいひ</rt></ruby>の<ruby>誕生<rt>たんじょう</rt></ruby>',
        period: '<ruby>約<rt>やく</rt></ruby>5<ruby>億<rt>おく</rt></ruby>〜4<ruby>億<rt>おく</rt></ruby><ruby>年<rt>ねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>（<ruby>無顎類<rt>むがくるい</rt></ruby>〜<ruby>初期魚類<rt>しょきぎょるい</rt></ruby>の<ruby>進化<rt>しんか</rt></ruby>）',
        summary: '<ruby>脊椎動物<rt>せきついどうぶつ</rt></ruby>がより<ruby>高度<rt>こうど</rt></ruby>に<ruby>進化<rt>しんか</rt></ruby>し、<ruby>体内<rt>たいない</rt></ruby>のエネルギー<ruby>管理<rt>かんり</rt></ruby>が<ruby>複雑<rt>ふくざつ</rt></ruby>になった<ruby>時代<rt>じだい</rt></ruby>です。<ruby>脳<rt>のう</rt></ruby>は「どれくらい<ruby>得<rt>とく</rt></ruby>したか」や「どれくらい<ruby>損<rt>そん</rt></ruby>をしそうか」を<ruby>計算<rt>けいさん</rt></ruby>するようになり、<ruby>特<rt>とく</rt></ruby>に「<ruby>失<rt>うしな</rt></ruby>うこと」を<ruby>極端<rt>きょくたん</rt></ruby>に<ruby>怖<rt>こわ</rt></ruby>がるプログラムが<ruby>書<rt>か</rt></ruby>き<ruby>込<rt>こ</rt></ruby>まれました。',
        img: '/images/dunkleosteus.jpeg',
        alt: 'ダンクルオステウスのイラストの画像',
        functions: [
            {
                name: '「<ruby>思<rt>おも</rt></ruby>ったより<ruby>良<rt>よ</rt></ruby>かった！」を<ruby>計算<rt>けいさん</rt></ruby>する<ruby>仕組<rt>しく</rt></ruby>み（<ruby>報酬予測誤差<rt>ほうしゅうよそくごさ</rt></ruby>の<ruby>計算<rt>けいさん</rt></ruby>：TD<ruby>学習<rt>がくしゅう</rt></ruby>）',
                description:
                    'ドーパミンなどの<ruby>物質<rt>ぶっしつ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って、「<ruby>予想<rt>よそう</rt></ruby>よりラッキーだったか、ガッカリだったか」を<ruby>計算<rt>けいさん</rt></ruby>し、<ruby>次<rt>つぎ</rt></ruby>の<ruby>行動<rt>こうどう</rt></ruby>に<ruby>活<rt>い</rt></ruby>かす<ruby>機能<rt>きのう</rt></ruby>です。この<ruby>誤差<rt>ごさ</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>することで、より<ruby>効率<rt>こうりつ</rt></ruby>よく「<ruby>快楽<rt>かいらく</rt></ruby>（<ruby>報酬<rt>ほうしゅう</rt></ruby>）」を<ruby>求<rt>もと</rt></ruby>めるように<ruby>学習<rt>がくしゅう</rt></ruby>が<ruby>進<rt>すす</rt></ruby>みます。'
            },
            {
                name: '<ruby>体<rt>からだ</rt></ruby>のエネルギー<ruby>予報<rt>よほう</rt></ruby>と「<ruby>快<rt>かい</rt></ruby>・<ruby>不快<rt>ふかい</rt></ruby>」（アロスタシスと<ruby>価値<rt>かち</rt></ruby>づけ）',
                description:
                    '<ruby>脳<rt>のう</rt></ruby>の<ruby>一部<rt>いちぶ</rt></ruby>（<ruby>島皮質<rt>とうひしつ</rt></ruby>や<ruby>前帯状皮質<rt>ぜんたいじょうひしつ</rt></ruby>の<ruby>原型<rt>げんけい</rt></ruby>）が、<ruby>将来<rt>しょうらい</rt></ruby>エネルギーが<ruby>足<rt>た</rt></ruby>りなくなりそうか<ruby>予測<rt>よそく</rt></ruby>し、<ruby>事前<rt>じぜん</rt></ruby>に<ruby>対策<rt>たいさく</rt></ruby>する<ruby>機能<rt>きのう</rt></ruby>です。この「<ruby>予算管理<rt>よさんかんり</rt></ruby>」の<ruby>結果<rt>けっか</rt></ruby>が、「なんとなく<ruby>嫌<rt>いや</rt></ruby>な<ruby>感<rt>かん</rt></ruby>じ（<ruby>不快<rt>ふかい</rt></ruby>）」や「<ruby>良<rt>よ</rt></ruby>い<ruby>感<rt>かん</rt></ruby>じ（<ruby>快<rt>かい</rt></ruby>）」という<ruby>感情<rt>かんじょう</rt></ruby>の<ruby>土台<rt>どだい</rt></ruby>になりました。'
            },
            {
                name: '「もらう<ruby>喜<rt>よろこ</rt></ruby>び」より「<ruby>失<rt>うしな</rt></ruby>う<ruby>痛<rt>いた</rt></ruby>み」を<ruby>優先<rt>ゆうせん</rt></ruby>するクセ（ネガティビティ・バイアス／<ruby>損失回避<rt>そんしつかいひ</rt></ruby>）',
                description:
                    '「エサを<ruby>得<rt>え</rt></ruby>る<ruby>利益<rt>りえき</rt></ruby>」よりも「<ruby>命<rt>いのち</rt></ruby>の<ruby>危険<rt>きけん</rt></ruby>につながる<ruby>損失<rt>そんしつ</rt></ruby>」の<ruby>方<rt>ほう</rt></ruby>が<ruby>重要<rt>じゅうよう</rt></ruby>だったため、ネガティブな<ruby>出来事<rt>できごと</rt></ruby>により<ruby>強<rt>つよ</rt></ruby>く<ruby>反応<rt>はんのう</rt></ruby>する<ruby>傾向<rt>けいこう</rt></ruby>が<ruby>進化<rt>しんか</rt></ruby>しました。<ruby>一般<rt>いっぱん</rt></ruby>に、<ruby>人<rt>ひと</rt></ruby>は<ruby>損失<rt>そんしつ</rt></ruby>を<ruby>利益<rt>りえき</rt></ruby>よりも<ruby>強<rt>つよ</rt></ruby>く<ruby>感<rt>かん</rt></ruby>じる<ruby>傾向<rt>けいこう</rt></ruby>があり（<ruby>損失回避<rt>そんしつかいひ</rt></ruby>）、その<ruby>強<rt>つよ</rt></ruby>さは<ruby>状況<rt>じょうきょう</rt></ruby>によって<ruby>変<rt>か</rt></ruby>わるものの、しばしば<ruby>同程度<rt>どうていど</rt></ruby>の<ruby>利益<rt>りえき</rt></ruby>よりも<ruby>大<rt>おお</rt></ruby>きく<ruby>評価<rt>ひょうか</rt></ruby>されます。'
            }
        ],
        keywords: [
            '#ドーパミン',
            '#セロトニン',
            '#<ruby>報酬予測誤差<rt>ほうしゅうよそくごさ</rt></ruby>',
            '#TD<ruby>学習<rt>がくしゅう</rt></ruby>',
            '#アロスタシス',
            '#<ruby>島皮質<rt>とうひしつ</rt></ruby>',
            '#<ruby>前帯状皮質<rt>ぜんたいじょうひしつ</rt></ruby>',
            '#<ruby>損失回避<rt>そんしつかいひ</rt></ruby>',
            '#<ruby>現状維持<rt>げんじょういじ</rt></ruby>バイアス'
        ]
    },
    {
        title: '<ruby>第<rt>だい</rt></ruby>6<ruby>段階<rt>だんかい</rt></ruby>：<ruby>類推<rt>るいすい</rt></ruby>（アナロジー）とパターンの<ruby>一般化<rt>いっぱんか</rt></ruby> ─<ruby>世界<rt>せかい</rt></ruby>をカテゴリ<ruby>化<rt>か</rt></ruby>する<ruby>脳<rt>のう</rt></ruby>',
        period: '<ruby>約<rt>やく</rt></ruby>2<ruby>億<rt>おく</rt></ruby><ruby>年<rt>ねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>〜（<ruby>哺乳類<rt>ほにゅうるい</rt></ruby>の<ruby>誕生<rt>たんじょう</rt></ruby>と<ruby>大脳皮質<rt>だいのうひしつ</rt></ruby>の<ruby>拡大<rt>かくだい</rt></ruby>）',
        summary: '<ruby>哺乳類<rt>ほにゅうるい</rt></ruby>が<ruby>登場<rt>とうじょう</rt></ruby>し、<ruby>脳<rt>のう</rt></ruby>の<ruby>表面<rt>ひょうめん</rt></ruby>にある「<ruby>大脳皮質<rt>だいのうひしつ</rt></ruby>」が<ruby>大<rt>おお</rt></ruby>きくなった<ruby>時代<rt>じだい</rt></ruby>です。バラバラの<ruby>出来事<rt>できごと</rt></ruby>を「これとあれは<ruby>似<rt>に</rt></ruby>ている」とまとめて<ruby>覚<rt>おぼ</rt></ruby>えることで、<ruby>初<rt>はじ</rt></ruby>めて<ruby>見<rt>み</rt></ruby>る<ruby>状況<rt>じょうきょう</rt></ruby>でも「たぶんこうなるだろう」と<ruby>一瞬<rt>いっしゅん</rt></ruby>で<ruby>予測<rt>よそく</rt></ruby>ができるようになりました。',
        img: '/images/adelobasileus.jpeg',
        alt: 'アデロバシレウスのイラストの画像',
        functions: [
            {
                name: '<ruby>少<rt>すく</rt></ruby>ないヒントで「あれだ！」と<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>す<ruby>力<rt>ちから</rt></ruby>（パターン<ruby>補完<rt>ほかん</rt></ruby>と<ruby>抽象化<rt>ちゅうしょうか</rt></ruby>：<ruby>類推<rt>るいすい</rt></ruby>）',
                description:
                    '<ruby>大脳皮質<rt>だいのうひしつ</rt></ruby>（<ruby>前頭前野<rt>ぜんとうぜんや</rt></ruby>や<ruby>側頭葉<rt>そくとうよう</rt></ruby>）や<ruby>海馬<rt>かいば</rt></ruby>が<ruby>発達<rt>はったつ</rt></ruby>し、<ruby>少<rt>すこ</rt></ruby>しの<ruby>情報<rt>じょうほう</rt></ruby>から<ruby>過去<rt>かこ</rt></ruby>の<ruby>似<rt>に</rt></ruby>た<ruby>経験<rt>けいけん</rt></ruby>をセットで<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>す<ruby>機能<rt>きのう</rt></ruby>です。これにより、<ruby>未知<rt>みち</rt></ruby>の<ruby>状況<rt>じょうきょう</rt></ruby>でも「<ruby>過去<rt>かこ</rt></ruby>のあの<ruby>時<rt>とき</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じだ」と<ruby>当<rt>あ</rt></ruby>てはめて、<ruby>一瞬<rt>いっしゅん</rt></ruby>で<ruby>判断<rt>はんだん</rt></ruby>を<ruby>下<rt>くだ</rt></ruby>せるようになりました。'
            },
            {
                name: '「だいたい<ruby>同<rt>おな</rt></ruby>じ」でひとまとめにするクセ（<ruby>過剰<rt>かじょう</rt></ruby>な<ruby>一般化<rt>いっぱんか</rt></ruby>）',
                description:
                    '<ruby>細<rt>こま</rt></ruby>かい<ruby>違<rt>ちが</rt></ruby>いを<ruby>無視<rt>むし</rt></ruby>して、「<ruby>細長<rt>ほそなが</rt></ruby>くて<ruby>動<rt>うご</rt></ruby>くもの＝<ruby>危険<rt>きけん</rt></ruby>かもしれない」といった<ruby>大<rt>おお</rt></ruby>まかな<ruby>分類<rt>ぶんるい</rt></ruby>をする<ruby>機能<rt>きのう</rt></ruby>です。<ruby>誤認<rt>ごにん</rt></ruby>（「ただの<ruby>草<rt>くさ</rt></ruby>だった」など）が<ruby>起<rt>お</rt></ruby>きても、「<ruby>見逃<rt>みのが</rt></ruby>して<ruby>危険<rt>きけん</rt></ruby>に<ruby>遭<rt>あ</rt></ruby>う」よりは<ruby>安全<rt>あんぜん</rt></ruby>なため、このような<ruby>一般化<rt>いっぱんか</rt></ruby>が<ruby>生<rt>い</rt></ruby>き<ruby>残<rt>のこ</rt></ruby>りに<ruby>有利<rt>ゆうり</rt></ruby>でした。これがステレオタイプ(<ruby>過度<rt>かど</rt></ruby>に<ruby>一般化<rt>いっぱんか</rt></ruby>された<ruby>固定観念<rt>こていかんねん</rt></ruby>)の<ruby>認知的基盤<rt>にんちてききばん</rt></ruby>の<ruby>一<rt>ひと</rt></ruby>つです。'
            }
        ],
        keywords: [
            '#<ruby>大脳皮質<rt>だいのうひしつ</rt></ruby>',
            '#<ruby>海馬<rt>かいば</rt></ruby>',
            '#パターン<ruby>補完<rt>ほかん</rt></ruby>',
            '#パターン<ruby>分離<rt>ぶんり</rt></ruby>',
            '#<ruby>類推<rt>るいすい</rt></ruby>（アナロジー）',
            '#<ruby>過剰<rt>かじょう</rt></ruby>な<ruby>一般化<rt>いっぱんか</rt></ruby>',
            '#<ruby>代表性<rt>だいひょうせい</rt></ruby>ヒューリスティック',
            '#ステレオタイプ'
        ]
    },
    {
        title: '<ruby>第<rt>だい</rt></ruby>7<ruby>段階<rt>だんかい</rt></ruby>：<ruby>社会性<rt>しゃかいせい</rt></ruby>の<ruby>爆発<rt>ばくはつ</rt></ruby> ─<ruby>裏切<rt>うらぎ</rt></ruby>り<ruby>者検知<rt>ものけんち</rt></ruby>と<ruby>言語<rt>げんご</rt></ruby>による<ruby>自己正当化<rt>じこせいとうか</rt></ruby>',
        period: '<ruby>約<rt>やく</rt></ruby><ruby>数千万年<rt>すうせんまんねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>〜<ruby>数十万年<rt>すうじゅうまんねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>（<ruby>霊長類<rt>れいちょうるい</rt></ruby>〜<ruby>現生人類<rt>げんせいじんるい</rt></ruby>の<ruby>進化<rt>しんか</rt></ruby>）',
        summary: 'サルからヒトへと<ruby>進化<rt>しんか</rt></ruby>し、<ruby>大<rt>おお</rt></ruby>きなグループで<ruby>生活<rt>せいかつ</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めた<ruby>時代<rt>じだい</rt></ruby>です。<ruby>仲間<rt>なかま</rt></ruby>と<ruby>協力<rt>きょうりょく</rt></ruby>する<ruby>一方<rt>いっぽう</rt></ruby>で、「<ruby>自分<rt>じぶん</rt></ruby>だけズルをする<ruby>奴<rt>やつ</rt></ruby>」を<ruby>見抜<rt>みぬ</rt></ruby>いたり、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>失敗<rt>しっぱい</rt></ruby>を<ruby>仲間<rt>なかま</rt></ruby>に<ruby>責<rt>せ</rt></ruby>められないよう「<ruby>言<rt>い</rt></ruby>い<ruby>訳<rt>わけ</rt></ruby>」をしたりする<ruby>必要<rt>ひつよう</rt></ruby>が<ruby>出<rt>で</rt></ruby>てきました。これが、<ruby>対人関係<rt>たいじんかんけい</rt></ruby>の<ruby>複雑<rt>ふくざつ</rt></ruby>な<ruby>思<rt>おも</rt></ruby>い<ruby>込<rt>こ</rt></ruby>みを<ruby>生<rt>う</rt></ruby>みました。',
        img: '/images/australopithecus.jpeg',
        alt: '男女のアウストラロピテクスのイラストの画像',
        functions: [
            {
                name: '「アイツ、<ruby>怪<rt>あや</rt></ruby>しいぞ」と<ruby>疑<rt>うたが</rt></ruby>うセンサー（<ruby>裏切<rt>うらぎ</rt></ruby>り<ruby>者検知<rt>ものけんち</rt></ruby>とエージェント<ruby>性検出<rt>せいけんしゅつ</rt></ruby>）',
                description:
                    'わずかな<ruby>手<rt>て</rt></ruby>がかりから「<ruby>誰<rt>だれ</rt></ruby>かの<ruby>意図<rt>いと</rt></ruby>があるかもしれない」と<ruby>推測<rt>すいそく</rt></ruby>する<ruby>傾向<rt>けいこう</rt></ruby>です。これは<ruby>実際<rt>じっさい</rt></ruby>の<ruby>社会的判断<rt>しゃかいてきはんだん</rt></ruby>に<ruby>役立<rt>やくだ</rt></ruby>つ<ruby>一方<rt>いっぽう</rt></ruby>で、<ruby>偶然<rt>ぐうぜん</rt></ruby>の<ruby>出来事<rt>できごと</rt></ruby>にも<ruby>意図<rt>いと</rt></ruby>を<ruby>読<rt>よ</rt></ruby>み<ruby>取<rt>と</rt></ruby>ってしまう<ruby>原因<rt>げんいん</rt></ruby>にもなります。'
            },
            {
                name: 'あとから<ruby>作<rt>つく</rt></ruby>る「もっともらしい<ruby>物語<rt>ものがたり</rt></ruby>」（<ruby>言語<rt>げんご</rt></ruby>による<ruby>事後的合理化<rt>じごてきごうりか</rt></ruby>）',
                description:
                    '<ruby>自分<rt>じぶん</rt></ruby>の<ruby>行動<rt>こうどう</rt></ruby>や<ruby>失敗<rt>しっぱい</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して、<ruby>言葉<rt>ことば</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って「これにはこんな<ruby>深<rt>ふか</rt></ruby>い<ruby>理由<rt>りゆう</rt></ruby>があったんだ」と、あとから<ruby>理屈<rt>りくつ</rt></ruby>をつけて<ruby>正当化<rt>せいとうか</rt></ruby>する<ruby>機能<rt>きのう</rt></ruby>です。<ruby>群<rt>む</rt></ruby>れの<ruby>中<rt>なか</rt></ruby>での「<ruby>評判<rt>ひょうばん</rt></ruby>」が<ruby>悪<rt>わる</rt></ruby>いと<ruby>生<rt>い</rt></ruby>きていけなかったため、<ruby>自分<rt>じぶん</rt></ruby>を<ruby>正<rt>ただ</rt></ruby>しく<ruby>見<rt>み</rt></ruby>せるための「<ruby>心<rt>こころ</rt></ruby>の<ruby>防具<rt>ぼうぐ</rt></ruby>」として<ruby>進化<rt>しんか</rt></ruby>しました。これが、<ruby>自分<rt>じぶん</rt></ruby>に<ruby>都合<rt>つごう</rt></ruby>の<ruby>良<rt>よ</rt></ruby>い<ruby>情報<rt>じょうほう</rt></ruby>だけを<ruby>集<rt>あつ</rt></ruby>める（<ruby>確証<rt>かくしょう</rt></ruby>バイアス）などの<ruby>原因<rt>げんいん</rt></ruby>です。'
            }
        ],
        keywords: [
            '#<ruby>社会脳仮説<rt>しゃかいのうかせつ</rt></ruby>',
            '#デフォルトモードネットワーク',
            '#<ruby>相互利他行動<rt>そうごりたこうどう</rt></ruby>',
            '#エージェント<ruby>性検出<rt>せいけんしゅつ</rt></ruby>',
            '#<ruby>事後的合理化<rt>じごてきごうりか</rt></ruby>',
            '#<ruby>確証<rt>かくしょう</rt></ruby>バイアス',
            '#<ruby>後知恵<rt>あとぢえ</rt></ruby>バイアス'
        ]
    },
    {
        title: '<ruby>第<rt>だい</rt></ruby>8<ruby>段階<rt>だんかい</rt></ruby>：<ruby>現代人<rt>げんだいじん</rt></ruby>の<ruby>認知<rt>にんち</rt></ruby>バイアス ─<ruby>生存戦略<rt>せいぞんせんりゃく</rt></ruby>の<ruby>化石<rt>かせき</rt></ruby>の<ruby>顕在化<rt>けんざいか</rt></ruby>',
        period: '<ruby>約<rt>やく</rt></ruby><ruby>数万年前<rt>すうまんねんまえ</rt></ruby>〜<ruby>現代<rt>げんだい</rt></ruby>（<ruby>文明<rt>ぶんめい</rt></ruby>の<ruby>誕生<rt>たんじょう</rt></ruby><ruby>以降<rt>いこう</rt></ruby>）',
        summary: '<ruby>文明<rt>ぶんめい</rt></ruby>が<ruby>発達<rt>はったつ</rt></ruby>し、<ruby>生活環境<rt>せいかつかんきょう</rt></ruby>がガラリと<ruby>変<rt>か</rt></ruby>わった<ruby>現代<rt>げんだい</rt></ruby>です。<ruby>私<rt>わたし</rt></ruby>たちの<ruby>脳<rt>のう</rt></ruby>は<ruby>今<rt>いま</rt></ruby>も「サバンナで<ruby>生<rt>い</rt></ruby>き<ruby>残<rt>のこ</rt></ruby>るための<ruby>設定<rt>せってい</rt></ruby>」のまま、<ruby>情報<rt>じょうほう</rt></ruby>のあふれる<ruby>現代社会<rt>げんだいしゃかい</rt></ruby>を<ruby>生<rt>い</rt></ruby>きています。かつて<ruby>命<rt>いのち</rt></ruby>を<ruby>守<rt>まも</rt></ruby>るために<ruby>必要<rt>ひつよう</rt></ruby>だった「<ruby>工夫<rt>くふう</rt></ruby>」が、<ruby>今<rt>いま</rt></ruby>では「<ruby>判断<rt>はんだん</rt></ruby>ミス（バイアス）」として<ruby>目立<rt>めだ</rt></ruby>つようになりました。',
        img: '/images/boy_girl.png',
        alt: '男の子と女の子のイラストの画像',
        functions: [
            {
                name: '<ruby>昔<rt>むかし</rt></ruby>のルールと<ruby>今<rt>いま</rt></ruby>の<ruby>環境<rt>かんきょう</rt></ruby>のズレ（<ruby>進化的<rt>しんかてき</rt></ruby>ミスマッチによるバイアスの<ruby>発現<rt>はつげん</rt></ruby>）',
                description:
                    '<ruby>何百万年<rt>なんびゃくまんねん</rt></ruby>もかけて「ジャングルや<ruby>草原<rt>そうげん</rt></ruby>で<ruby>生<rt>い</rt></ruby>き<ruby>延<rt>の</rt></ruby>びる」ために<ruby>作<rt>つく</rt></ruby>られた<ruby>脳<rt>のう</rt></ruby>の<ruby>機能<rt>きのう</rt></ruby>が、<ruby>安全<rt>あんぜん</rt></ruby>で<ruby>情報<rt>じょうほう</rt></ruby>が<ruby>多<rt>おお</rt></ruby>すぎる<ruby>現代<rt>げんだい</rt></ruby>で<ruby>空回<rt>からまわ</rt></ruby>りする<ruby>現象<rt>げんしょう</rt></ruby>です。かつての「<ruby>生<rt>い</rt></ruby>き<ruby>残<rt>のこ</rt></ruby>るための<ruby>知恵<rt>ちえ</rt></ruby>」が、<ruby>現代<rt>げんだい</rt></ruby>では「<ruby>理屈<rt>りくつ</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わないおかしな<ruby>判断<rt>はんだん</rt></ruby>（バグ）」として<ruby>現<rt>あらわ</rt></ruby>れてしまいます。'
            },
            {
                name: '24<ruby>時間<rt>じかん</rt></ruby><ruby>動<rt>うご</rt></ruby>き<ruby>続<rt>つづ</rt></ruby>ける「<ruby>命<rt>いのち</rt></ruby>を<ruby>守<rt>まも</rt></ruby>るプログラム」（バイアスのモジュール<ruby>群<rt>ぐん</rt></ruby>としての<ruby>稼働<rt>かどう</rt></ruby>）',
                description:
                    '<ruby>私<rt>わたし</rt></ruby>たちの<ruby>脳<rt>のう</rt></ruby>の<ruby>裏側<rt>うらがわ</rt></ruby>では、これまで<ruby>獲得<rt>かくとく</rt></ruby>した「<ruby>目立<rt>めだ</rt></ruby>つものに<ruby>飛<rt>と</rt></ruby>びつく（<ruby>第<rt>だい</rt></ruby>4<ruby>段階<rt>だんかい</rt></ruby>）」「<ruby>損<rt>そん</rt></ruby>を<ruby>極端<rt>きょくたん</rt></ruby>に<ruby>怖<rt>こわ</rt></ruby>がる（<ruby>第<rt>だい</rt></ruby>5<ruby>段階<rt>だんかい</rt></ruby>）」「<ruby>決<rt>き</rt></ruby>めつける（<ruby>第<rt>だい</rt></ruby>6<ruby>段階<rt>だんかい</rt></ruby>）」「<ruby>自分<rt>じぶん</rt></ruby>を<ruby>正当化<rt>せいとうか</rt></ruby>する（<ruby>第<rt>だい</rt></ruby>7<ruby>段階<rt>だんかい</rt></ruby>）」といった<ruby>機能<rt>きのう</rt></ruby>が、<ruby>今<rt>いま</rt></ruby>も<ruby>同時<rt>どうじ</rt></ruby>に<ruby>動<rt>うご</rt></ruby>き<ruby>続<rt>つづ</rt></ruby>けています。これらは<ruby>単<rt>たん</rt></ruby>なるミスではなく、かつて<ruby>私<rt>わたし</rt></ruby>たちの<ruby>先祖<rt>せんぞ</rt></ruby>が<ruby>命<rt>いのち</rt></ruby>をつなぐために<ruby>必死<rt>ひっし</rt></ruby>に<ruby>作<rt>つく</rt></ruby>り<ruby>上<rt>あ</rt></ruby>げた「<ruby>防衛<rt>ぼうえい</rt></ruby>プログラム」なのです。'
            }
        ],
        keywords: [
            '#<ruby>進化的適応環境<rt>しんかてきてきおうかんきょう</rt></ruby>（EEA）',
            '#<ruby>進化的<rt>しんかてき</rt></ruby>ミスマッチ',
            '#<ruby>認知<rt>にんち</rt></ruby>バイアス',
            '#ピーク・エンドの<ruby>法則<rt>ほうそく</rt></ruby>',
            '#<ruby>生存戦略<rt>せいぞんせんりゃく</rt></ruby>の<ruby>化石<rt>かせき</rt></ruby>'
        ]
    }
] as const;

