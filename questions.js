const questions = [
    {
        question: "Escolha a imagem que corresponde uma realidade virtual",
        type: "image",
        options: [
            "https://goodstorage.com.br/wp-content/uploads/2024/02/setup-gamer-scaled.jpg",
            "https://apiapp.sualuz.com.br/wp/wp-content/uploads/2023/02/homem-usando-oculos-de-realidade-virtual.webp",
            "https://www.sistemaintegrado.com.br/si/cdn/img/800/450/crop/60/20211123_619d17c1594db.jpg",
            "https://www.delas.pt/files/2019/04/televis%C3%A3o-casa-1200x675.jpg"
        ],
        correctAnswer: "https://apiapp.sualuz.com.br/wp/wp-content/uploads/2023/02/homem-usando-oculos-de-realidade-virtual.webp"
    },
    {
        question: "Numa experiência de realidade não imersiva, qual das afirmações é verdadeira?",
        type: "multiple-choice",
        options: [
            "A) O utilizador sente que está dentro do ambiente virtual, interagindo fisicamente com ele. ",
            "B) O utilizador interage com o conteúdo, mas não é absorvido pelo ambiente.",
            "C)A experiência ocorre num espaço totalmente real, sem sobreposição de elementos digitais.",
            "D) O utilizador utiliza um headset de realidade virtual para explorar o conteúdo."
        ],
        correctAnswer: "B) O utilizador interage com o conteúdo, mas não é absorvido pelo ambiente."
    },
    {
        question: "Qual das alternativas é um exemplo de realidade imersiva que utiliza a interatividade para criar uma experiência envolvente?",
        type: "multiple-choice",
        options: [
            "A) Navegar por um site de turismo em 3D com um mouse. ",
            "B) Usar um headset de realidade virtual para explorar uma cidade digital, como se estivesse realmente lá.",
            "C) Assistir a um documentário em 360°, sem interação. ",
            "D) Usar um aplicativo de mapas em 2D para navegar numa cidade. "
        ],
        correctAnswer: "B) Usar um headset de realidade virtual para explorar uma cidade digital, como se estivesse realmente lá."
    },
    {
        question: "Relacione os tipos de realidade com as suas características:",
        type: "match",
        pairs: [
            { question: "1. Realidade Imersiva", 
            options: ["a) O utilizador interage com um ambiente digital, mas o conteúdo é consumido de forma passiva, sem uma sensação de 'presença'.", 
            "b) O utilizador é imerso num mundo digital e interage fisicamente com ele, utilizando dispositivos como auriculares e controles manuais.", 
            "c) A realidade é ampliada com a sobreposição de elementos digitais, mas o utilizador continua no ambiente físico."],

            correctAnswer: "b) O utilizador é imerso num mundo digital e interage fisicamente com ele, utilizando dispositivos como auriculares e controles manuais." },
            { question: "2. Realidade Não Imersiva",
             options: ["a) O utilizador interage com um ambiente digital, mas o conteúdo é consumido de forma passiva, sem uma sensação de 'presença'.",
             "b) O utilizador é imerso num mundo digital e interage fisicamente com ele, utilizando dispositivos como auriculares e controles manuais.", 
             "c) A realidade é ampliada com a sobreposição de elementos digitais, mas o utilizador continua no ambiente físico."], 
             correctAnswer: "a) O utilizador interage com um ambiente digital, mas o conteúdo é consumido de forma passiva, sem uma sensação de 'presença'." },
            
             { question: "3. Realidade Virtual", 
            options: ["a) O utilizador interage com um ambiente digital, mas o conteúdo é consumido de forma passiva, sem uma sensação de 'presença'.", 
            "b) O utilizador é imerso num mundo digital e interage fisicamente com ele, utilizando dispositivos como auriculares e controles manuais.",
            "c) A realidade é ampliada com a sobreposição de elementos digitais, mas o utilizador continua no ambiente físico."],
            correctAnswer: "c) A realidade é ampliada com a sobreposição de elementos digitais, mas o utilizador continua no ambiente físico." }
        ]
    },
    { question: "Explique brevemente a diferença entre hardware e software no contexto de tecnologias multimédia. ", 
    type: "open-ended",
    correctAnswer: "O hardware refere-se aos componentes físicos de um sistema, como o  computador, monitor, placa de som, microfone e outros dispositivos necessários para processar e exibir multimédia. O software, por outro lado, são os programas e aplicações que permitem a criação, edição e exibição de conteúdo multimédia, como editores de vídeo, reprodutores de áudio e programas gráficos. " 
    },
    {
        question: "Indique se as seguintes afirmações sobre multimédia são verdadeiras (V) ou falsas (F):",
        type: "match",
        pairs: [
            { question: "1. A multimédia combina diferentes formas de conteúdo, como texto, áudio, vídeo, imagens e animações. ", 
            options: ["(V)Verdadeiro", 
            "(F)Falso"],

            correctAnswer: "(V)Verdadeiro" },
            { question: "2. Os sistemas multimédia são usados em áreas como educação, entretenimento e publicidade. ",
             options: ["(V)Verdadeiro",
             "(F)Falso"], 
             correctAnswer: "(V)Verdadeiro" },
            
             { question: "3. A multimédia depende exclusivamente de áudio e vídeo, sendo o texto um elemento irrelevante. ", 
            options: ["(V)Verdadeiro", 
            "(F)Falso",],
            correctAnswer: "(F)Falso" },

            { question: "4. O desenvolvimento de conteúdo multimédia geralmente exige a integração de várias tecnologias e disciplinas.  ", 
                options: ["(V)Verdadeiro", 
                "(F)Falso",],
                correctAnswer: "(V)Verdadeiro" }
        ]
    },
    {
        question: "Qual das alternativas abaixo define corretamente a multimédia?",
        type: "multiple-choice",
        options: [
            "A) Um arquivo de texto que inclui apenas palavras e frases.",
            "B) A utilização simultânea de diferentes tipos de mídia, como texto, imagem, áudio e vídeo, para transmitir informação.",
            "C) Apenas a criação de vídeos com música de fundo.",
            "D) A visualização de imagens em sites. "
        ],
        correctAnswer: "B) A utilização simultânea de diferentes tipos de mídia, como texto, imagem, áudio e vídeo, para transmitir informação."
    },
    {
        question: "Indique se as seguintes afirmações sobre linearidade e não-linearidade em multimédia são verdadeiras (V) ou falsas (F): ",
        type: "match",
        pairs: [
            { question: "1. Em multimédia linear, o conteúdo é apresentado de forma sequencial, sem permitir ao utilizador alterar a ordem de visualização. ", 
            options: ["(V)Verdadeiro", 
            "(F)Falso"],

            correctAnswer: "(V)Verdadeiro" },
            { question: "2. O conceito de multimédia não-linear implica que o utilizador tem controle sobre o percurso de navegação, escolhendo o que deseja ver e em que ordem.",
             options: ["(V)Verdadeiro",
             "(F)Falso"], 
             correctAnswer: "(V)Verdadeiro" },
            
             { question: "3. A multimédia linear é ideal para jogos interativos, pois permite ao utilizador explorar livremente diferentes caminhos na narrativa. ", 
            options: ["(V)Verdadeiro", 
            "(F)Falso",],
            correctAnswer: "(F)Falso" },

            { question: "4. Um exemplo de multimédia linear é um vídeo tradicional, onde o espectador assiste do início ao fim sem influenciar o conteúdo.", 
                options: ["(V)Verdadeiro", 
                "(F)Falso",],
                correctAnswer: "(V)Verdadeiro" },
            
            { question: "5. A multimédia não-linear é frequentemente usada em websites e aplicativos interativos, onde o utilizador decide como navegar pelo conteúdo.", 
                options: ["(V)Verdadeiro", 
                "(F)Falso",],
                correctAnswer: "(V)Verdadeiro" }
        ]
    },
    {
        question: "Associe corretamente os tipos de hardware com as suas respetivas funções em um sistema multimédia.",
        type: "match",
        pairs: [
            { question: "Placa de Som", 
            options: ["A) Exibir imagens e vídeos.", 
            "B) Capturar áudio.", 
            "C) Reproduzir som.",
            "D) Exibir gráficos e imagens em alta qualidade."],

            correctAnswer: "C) Reproduzir som." },

            { question: "Monitor",
             options: ["A) Exibir imagens e vídeos.",
             "B) Capturar áudio.", 
             "C) Reproduzir som.",
             "D) Exibir gráficos e imagens em alta qualidade."], 
             correctAnswer: "A) Exibir imagens e vídeos." },
            
             { question: "Microfone", 
            options: ["A) Exibir imagens e vídeos.", 
            "B) Capturar áudio.",
            "C) Reproduzir som.",
            "D) Exibir gráficos e imagens em alta qualidade.",
        ],
            correctAnswer: "B) Capturar áudio." },

            { question: "Placa Gráfica", 
                options: ["A) Exibir imagens e vídeos.", 
                "B) Capturar áudio.",
                "C) Reproduzir som.",
                "D) Exibir gráficos e imagens em alta qualidade."],
                correctAnswer: "D) Exibir gráficos e imagens em alta qualidade." }
        ]
    },
    {
        question: "Qual dos seguintes é um exemplo de recurso multimédia?",
        type: "multiple-choice",
        options: [
            "A) Um arquivo de texto puro (.txt)",
            "B) Um arquivo de imagem estática (.jpg)",
            "C) Um arquivo de áudio comprimido (.mp3)",
            "D) Todas as alternativas"
        ],
        correctAnswer: "D) Todas as alternativas"
    },
    {
        question: "Indique se as seguintes afirmações sobre formatos e codificação de multimédia são verdadeiras (V) ou falsas (F):",
        type: "match",
        pairs: [
            { question: "1. Formatos de arquivo como MP3, MP4 e JPEG são usados para armazenar dados multimédia de forma compacta e eficiente.", 
            options: ["(V)Verdadeiro", 
            "(F)Falso"],
            correctAnswer: "(V)Verdadeiro" },

            { question: "2. O formato MP4 é exclusivamente usado para armazenar áudio, não suportando dados de vídeo. ",
             options: ["(V)Verdadeiro",
             "(F)Falso"], 
             correctAnswer: "(F)Falso" },
            
        ]
    },
    {
        question: "Associe as aplicações multimédia aos seus principais usos.",
        type: "match",
        pairs: [
            { question: "Adobe Photoshop", 
            options: ["A) Edição de vídeo profissional.", 
            "B) Criação e edição de gráficos e imagens.", 
            "C) Criação de jogos e aplicações interativas.",
            "D) Edição de áudio."],

            correctAnswer: "B) Criação e edição de gráficos e imagens." },

            { question: "Final Cut Pro",
             options: ["A) Edição de vídeo profissional.",
             "B) Criação e edição de gráficos e imagens.", 
             "C) Criação de jogos e aplicações interativas.",
             "D) Edição de áudio."], 
             correctAnswer: "A) Edição de vídeo profissional." },
            
             { question: "Audacity", 
            options: ["A) Edição de vídeo profissional.", 
            "B) Criação e edição de gráficos e imagens.",
            "C) Criação de jogos e aplicações interativas.",
            "D) Edição de áudio.",],
            correctAnswer: "D) Edição de áudio." },

            { question: "Unity", 
                options: ["A) Edição de vídeo profissional.", 
                "B) Criação e edição de gráficos e imagens.",
                "C) Criação de jogos e aplicações interativas.",
                "D) Edição de áudio."],
                correctAnswer: "C) Criação de jogos e aplicações interativas." }
        ]
    },
    {
        question: "O que é uma imagem bitmap? ",
        type: "multiple-choice",
        options: [
            "A) Uma imagem formada por formas geométricas",
            "B) Uma imagem formada por pixels",
            "C) Uma imagem que usa apenas preto e branco"
        ],
        correctAnswer: "B) Uma imagem formada por pixels"
    },
    {
        question: "Qual dos formatos abaixo é baseado em bitmap? ",
        type: "multiple-choice",
        options: [
            "A) JPEG",
            "B) SVG",
            "C) EPS"
        ],
        correctAnswer: "A)JPEG"
    },
    {
        question: "Qual é a vantagem principal das imagens vetoriais?",
        type: "multiple-choice",
        options: [
            "A) São ideais para fotografias detalhadas",
            "B) Podem ser ampliadas sem perda de qualidade",
            "C) Ocupam sempre menos espaço em disco"
        ],
        correctAnswer: "B) Podem ser ampliadas sem perda de qualidade"
    },
    {
        question: "Escolha a imagem correspondente ao formato GIF",
        type: "image",
        options: [
            "https://conteudo.imguol.com.br/c/esporte/5a/2024/07/01/cristiano-ronaldo-chora-apos-perder-penalti-em-portugal-x-eslovenia-pela-eurocopa-1719868841967_v2_3x4.jpg",
            "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGI5NGdtbHA5MDE3OXVoaDFzOG9xYTJxeHdpZW94MTM0b2pzeHludyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hVOzfJ0scTQSm0Cnl0/giphy.webp",
        ],
        correctAnswer: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGI5NGdtbHA5MDE3OXVoaDFzOG9xYTJxeHdpZW94MTM0b2pzeHludyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hVOzfJ0scTQSm0Cnl0/giphy.webp"
    },
    {
        question: "Indique se a seguinte afirmação é verdadeira (V) ou falsa (F):",
        type: "match",
        pairs: [
            { question: "A resolução de uma imagem se refere ao número total de pixels que ela contém.", 
            options: ["(V)Verdadeiro", 
            "(F)Falso"],
            correctAnswer: "(V)Verdadeiro" },
        ]
    },
    {
        question: "O que é profundidade de imagem?",
        type: "multiple-choice",
        options: [
            "A) O tamanho do arquivo da imagem ",
            "B) A resolução da imagem",
            "C) O número de bits que representa a cor de cada pixel"
        ],
        correctAnswer: "C) O número de bits que representa a cor de cada pixel "
    },
    {
    question: "Quantas cores uma profundidade de 8 bits permite? ",
    type: "multiple-choice",
    options: [
        "A) 16",
        "B) 256",
        "C) 16,7 milhões"
    ],
    correctAnswer: "B) 256"
    },
    {
        question: "Porque é que os ficheiros de imagem bitmap podem ter tamanhos maiores que ficheiros vetoriais?",
        type: "multiple-choice",
        options: [
            "A) São armazenados como formas geométricas",
            "B) Precisam armazenar informações de cada pixel",
            "C) São comprimidos automaticamente"
        ],
        correctAnswer: "B) Precisam armazenar informações de cada pixel"
    },
];
