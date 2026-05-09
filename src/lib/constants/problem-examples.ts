export const viciousCycleStageLabels = [
    '<ruby>第<rt>だい</rt></ruby>1<ruby>段階<rt>だんかい</rt></ruby>: トリガー',
    '<ruby>第<rt>だい</rt></ruby>2<ruby>段階<rt>だんかい</rt></ruby>: <ruby>増幅<rt>ぞうふく</rt></ruby>',
    '<ruby>第<rt>だい</rt></ruby>3<ruby>段階<rt>だんかい</rt></ruby>: <ruby>固定<rt>こてい</rt></ruby>',
    '<ruby>第<rt>だい</rt></ruby>4<ruby>段階<rt>だんかい</rt></ruby>: <ruby>暴走<rt>ぼうそう</rt></ruby>',
] as const;

export const problemExamples = [
    {
        title: '🕵️ <ruby>陰謀論<rt>いんぼうろん</rt></ruby>',
        label: '「<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>だけが<ruby>真<rt>しん</rt></ruby><ruby>実<rt>じつ</rt></ruby>を<ruby>知<rt>し</rt></ruby>っている」という<ruby>罠<rt>わな</rt></ruby>',
        steps: [
            '「こんな<ruby>恐<rt>おそ</rt></ruby>ろしいことが<ruby>偶<rt>ぐう</rt></ruby><ruby>然<rt>ぜん</rt></ruby><ruby>起<rt>お</rt></ruby>きるはずがない」と<ruby>不<rt>ふ</rt></ruby><ruby>安<rt>あん</rt></ruby>になり、ネットで<ruby>怪<rt>あや</rt></ruby>しい<ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby>を<ruby>探<rt>さが</rt></ruby>し<ruby>始<rt>はじ</rt></ruby>める。',
            '<ruby>信<rt>しん</rt></ruby>じたい<ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby>ばかり<ruby>目<rt>め</rt></ruby>に<ruby>入<rt>はい</rt></ruby>り、<ruby>専<rt>せん</rt></ruby><ruby>門<rt>もん</rt></ruby><ruby>家<rt>か</rt></ruby>の<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>は「<ruby>嘘<rt>うそ</rt></ruby>だ」と<ruby>決<rt>き</rt></ruby>めつけて<ruby>無<rt>む</rt></ruby><ruby>視<rt>し</rt></ruby>するようになる。',
            '<ruby>反<rt>はん</rt></ruby><ruby>対<rt>たい</rt></ruby>する<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>や<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>を「<ruby>騙<rt>だま</rt></ruby>されている」と<ruby>見<rt>み</rt></ruby><ruby>下<rt>くだ</rt></ruby>し、<ruby>同<rt>おな</rt></ruby>じ<ruby>考<rt>かんが</rt></ruby>えを<ruby>持<rt>も</rt></ruby>つ<ruby>人<rt>ひと</rt></ruby>とだけ<ruby>繋<rt>つな</rt></ruby>がる。',
            '<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>が<ruby>破<rt>は</rt></ruby><ruby>綻<rt>たん</rt></ruby>しても「<ruby>間<rt>ま</rt></ruby><ruby>違<rt>ちが</rt></ruby>いを<ruby>認<rt>みと</rt></ruby>めたくない」ため、<ruby>悪<rt>わる</rt></ruby>いことはすべて「<ruby>敵<rt>てき</rt></ruby>のせい」にして<ruby>現<rt>げん</rt></ruby><ruby>実<rt>じつ</rt></ruby><ruby>逃<rt>とう</rt></ruby><ruby>避<rt>ひ</rt></ruby>する。'
        ],
        img: '/images/conspiracy_theory.webp',
        alt: '家族や友達が壁の外から呼びかけるが、壁の中でスマホを見る女の子の画像'
    },
    {
        title: '🎰 ギャンブル<ruby>依存<rt>いぞん</rt></ruby>',
        label: '「<ruby>次<rt>つぎ</rt></ruby>は<ruby>絶<rt>ぜっ</rt></ruby><ruby>対<rt>たい</rt></ruby><ruby>勝<rt>か</rt></ruby>てるはず」という<ruby>執<rt>しゅう</rt></ruby><ruby>着<rt>ちゃく</rt></ruby>',
        steps: [
            '<ruby>大<rt>おお</rt></ruby><ruby>勝<rt>が</rt></ruby>ちの<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>や<ruby>負<rt>ま</rt></ruby>けが<ruby>続<rt>つづ</rt></ruby>く<ruby>状<rt>じょう</rt></ruby><ruby>況<rt>きょう</rt></ruby>で、「そろそろ<ruby>当<rt>あ</rt></ruby>たりが<ruby>来<rt>く</rt></ruby>るはずだ」と<ruby>根<rt>こん</rt></ruby><ruby>拠<rt>きょ</rt></ruby>のない<ruby>自<rt>じ</rt></ruby><ruby>信<rt>しん</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ。',
            '<ruby>負<rt>ま</rt></ruby>けた<ruby>事<rt>じ</rt></ruby><ruby>実<rt>じつ</rt></ruby>は<ruby>忘<rt>わす</rt></ruby>れ、たまに<ruby>出<rt>で</rt></ruby>る<ruby>小<rt>ちい</rt></ruby>さな<ruby>当<rt>あ</rt></ruby>たりを「<ruby>流<rt>なが</rt></ruby>れが<ruby>変<rt>か</rt></ruby>わった<ruby>証<rt>しょう</rt></ruby><ruby>拠<rt>こ</rt></ruby>」と<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>に<ruby>言<rt>い</rt></ruby>い<ruby>聞<rt>き</rt></ruby>かせる。',
            '<ruby>周<rt>まわ</rt></ruby>りの<ruby>心<rt>しん</rt></ruby><ruby>配<rt>ぱい</rt></ruby>を「うるさい<ruby>攻<rt>こう</rt></ruby><ruby>撃<rt>げき</rt></ruby>」と<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>り、<ruby>隠<rt>かく</rt></ruby>れて<ruby>借<rt>しゃっ</rt></ruby><ruby>金<rt>きん</rt></ruby>をしてまでギャンブルを<ruby>続<rt>つづ</rt></ruby>ける。',
            '<ruby>失<rt>うしな</rt></ruby>ったものが<ruby>大<rt>おお</rt></ruby>きすぎて、さらに<ruby>大<rt>おお</rt></ruby>きなリスクを<ruby>負<rt>お</rt></ruby>って<ruby>破<rt>は</rt></ruby><ruby>滅<rt>めつ</rt></ruby>へと<ruby>突<rt>つ</rt></ruby>き<ruby>進<rt>すす</rt></ruby>んでしまう。'
        ],
        img: '/images/gambling.webp',
        alt: '針の罠の中にある宝箱を取ろうと近づく女の子の画像'
    },
    {
        title: '🌧️ メンタルの<ruby>不調<rt>ふちょう</rt></ruby>',
        label: '「みんなが<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>を<ruby>責<rt>せ</rt></ruby>めている」という<ruby>思<rt>おも</rt></ruby>い<ruby>込<rt>こ</rt></ruby>み',
        steps: [
            '<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>での<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby>のミスや<ruby>注<rt>ちゅう</rt></ruby><ruby>意<rt>い</rt></ruby>を、「<ruby>人<rt>じん</rt></ruby><ruby>格<rt>かく</rt></ruby>すべてを<ruby>否<rt>ひ</rt></ruby><ruby>定<rt>てい</rt></ruby>された」と<ruby>極<rt>きょく</rt></ruby><ruby>端<rt>たん</rt></ruby>に<ruby>重<rt>おも</rt></ruby>く<ruby>受<rt>う</rt></ruby>け<ruby>止<rt>と</rt></ruby>めてしまう。',
            '<ruby>同<rt>どう</rt></ruby><ruby>僚<rt>りょう</rt></ruby>のヒソヒソ<ruby>話<rt>ばなし</rt></ruby>がすべて<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>悪<rt>わる</rt></ruby><ruby>口<rt>ぐち</rt></ruby>に<ruby>思<rt>おも</rt></ruby>え、<ruby>批<rt>ひ</rt></ruby><ruby>判<rt>はん</rt></ruby>されている「<ruby>証<rt>しょう</rt></ruby><ruby>拠<rt>こ</rt></ruby>」ばかりを<ruby>探<rt>さが</rt></ruby>してしまう。',
            '<ruby>周<rt>しゅう</rt></ruby><ruby>囲<rt>い</rt></ruby>の<ruby>励<rt>はげ</rt></ruby>ましすら「<ruby>哀<rt>あわ</rt></ruby>れみ」や「<ruby>嘘<rt>うそ</rt></ruby>」だとひねくれて<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>り、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>殻<rt>から</rt></ruby>に<ruby>閉<rt>と</rt></ruby>じこもる。',
            '「<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>は<ruby>無<rt>む</rt></ruby><ruby>能<rt>のう</rt></ruby>だ」と<ruby>極<rt>きょく</rt></ruby><ruby>端<rt>たん</rt></ruby>な<ruby>結<rt>けつ</rt></ruby><ruby>論<rt>ろん</rt></ruby>を<ruby>出<rt>だ</rt></ruby>し、<ruby>心<rt>しん</rt></ruby><ruby>身<rt>しん</rt></ruby>ともに<ruby>追<rt>お</rt></ruby>い<ruby>込<rt>こ</rt></ruby>まれて<ruby>冷<rt>れい</rt></ruby><ruby>静<rt>せい</rt></ruby>な<ruby>判<rt>はん</rt></ruby><ruby>断<rt>だん</rt></ruby>ができなくなる。'
        ],
        img: '/images/depression.webp',
        alt: 'たくさんの目と指に刺されている女の子の画像'
    }
]
