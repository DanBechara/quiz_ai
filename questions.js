const questions = [
    {
        type: "open",
        question: "O que é realidade virtual?",
        answer: "Realidade virtual é, como o nome já indica, um ambiente virtual no qual o usuário pode se inserir como se estivesse mesmo ali, mas tudo não passa de um sistema computacional"
    },
    {
        type: "multiple",
        question: "Qual das alternativas é um exemplo de realidade imersiva que utiliza a interatividade para criar um experiência envolvente?",
        options: ["A) Navegar por um site de turismo em 3D com um mouse", "B) Usar um headset de realidade virtual para explorar uma cidade digital, como se estivesse realmente lá", "C) Assistir um ducumentário em 360° sem interação", "D) Usar um aplicativo de mapas em 2D para navegar numa cidade"],
        answer: "B) Usar um headset de realidade virtual para explorar uma cidade digital, como se estivesse realmente lá"
    },
    {
        type: "match",
        question: "Relacione os tipos de realidade com as suas características:",
        items: [
            { id: "1", text: "Realidade Imersiva" },
            { id: "2", text: "Realidade não Imersiva" },
            { id: "3", text: "Realidade Virtual" }
        ],
        options: [
            { id: "A", text: "O usuário interage com um ambiente digital, mas o conteúdo é consumido de forma passiva, sem uma sensação de presença" },
            { id: "B", text: "O usuário é imerso num mundo digital e interage fisicamente com ele, utilizando dispositivos como auriculares e controles manuais" },
            { id: "C", text: "A realidade é ampliada com a sobreposição de elementos digitais, mas o usuário continua no ambiente fisíco" }
        ],
        answer: {
            "1": "B",
            "2": "A",
            "3": "C"
        }
    },
    {
        type: "multiple",
        question: "Numa experiência de uma realidade não imersiva, qual das afirmações é verdadeira?",
        options: ["A) O usuário sente que está dentro do ambiente virtual, interagindo fisicamente com ele.", "B) O usuário interage com o conteúdo, mas não é  absorvido pelo ambiente.", "C) A experiência ocorre num espaço totalmente real, sem sobreposição de elementos digitais.", "D) O usuário utiliza um headset virtual para explorar o conteúdo"],
        answer: "B) O usuário interage com o conteúdo, mas não é  absorvido pelo ambiente."
    },
    {
        type: "open",
        question: "Explique brevemente a diferença entre hardware e software no contexto de tecnologias multimédia",
        answer: "O hardware refere-se aos componentes físicos de um sistema, como o computador, monitor, placa de som, microfone e outros dispositivos necessários para processar e exibir multimédia. O software, por outro lado, são os programas e aplicações que permitem a criação, edição e exibição de conteúdo multimédia, como editores de vídeo, reprodutores de áudio e programas gráficos."
    },
    {
        type: "multiple",
        question: "Qual das alternativas abaixo define corretamente a multimédia?",
        options: ["A) Um arquivo de texto que inclui apenas palavras e frases.", "B) A utilização simultânea de diferentes tipos de mídia, como texto, imagem, áudio e vídeo, para transmitir informação.", "C) Apenas a criação de vídeos com música de fundo. ", "D) A visualização de imagens em sites."],
        answer: "B) A utilização simultânea de diferentes tipos de mídia, como texto, imagem, áudio e vídeo, para transmitir informação."
    },
    {
        type: "match",
        question: "Indique se as seguintes afirmações sobre multimédia são verdadeiras (V) ou falsas (F):",
        items: [
            { id: "1", text: "A multimédia combina diferentes formas de conteúdo, como texto, áudio, vídeo, imagens e animações." },
            { id: "2", text: "Em multimédia, a interação com o usuário é dispensável, pois não influencia a experiência." },
            { id: "3", text: "Os sistemas multimédia são usados em áreas como educação, entretenimento e publicidade." },
            { id: "4", text: "A multimédia depende exclusivamente de áudio e vídeo, sendo o texto um elemento irrelevante." },
            { id: "5", text: " O desenvolvimento de conteúdo multimédia geralmente exige a integração de várias tecnologias e disciplinas." },
        ],
        options: [
            { id: "V", text: "Verdadeiro" },
            { id: "F", text: "Falso" },
        ],
        answer: {
            "1": "V",
            "2": "F",
            "3": "V",
            "4": "F",
            "5": "V",
        }
    },
    {
        type: "match",
        question: "Associe corretamente os tipos de hardware com as suas respetivas funções em um sistema multimédia.",
        items: [
            { id: "1", text: "Placa de Som" },
            { id: "2", text: "Monitor" },
            { id: "3", text: "Microfone" },
            { id: "4", text: "Placa Gráfica" }
        ],
        options: [
            { id: "A", text: "Exibir imagens e vídeos." },
            { id: "B", text: "Capturar áudio." },
            { id: "C", text: "Reproduzir som" },
            { id: "D", text: "Exibir gráficos e imagens em alta qualidade." },
        ],
        answer: {
            "1": "C",
            "2": "A",
            "3": "B",
            "4": "D"
        }
    },
    {
        type: "match",
        question: "Indique se as seguintes afirmações sobre linearidade e não-linearidade em multimédia são verdadeiras (V) ou falsas (F):",
        items: [
            { id: "1", text: "Em multimédia linear, o conteúdo é apresentado de forma sequencial, sem permitir ao usuário alterar a ordem de visualização." },
            { id: "2", text: "O conceito de multimédia não-linear implica que o usuário tem controle sobre o percurso de navegação, escolhendo o que deseja ver e em que ordem." },
            { id: "3", text: "A multimédia linear é ideal para jogos interativos, pois permite ao usuário explorar livremente diferentes caminhos na narrativa." },
            { id: "4", text: "Um exemplo de multimédia linear é um vídeo tradicional, onde o espectador assiste do início ao fim sem influenciar o conteúdo." },
            { id: "5", text: "A multimédia não-linear é frequentemente usada em websites e aplicativos interativos, onde o usuário decide como navegar pelo conteúdo." },
        ],
        options: [
            { id: "V", text: "Verdadeiro" },
            { id: "F", text: "Falso" },
        ],
        answer: {
            "1": "V",
            "2": "V",
            "3": "F",
            "4": "v",
            "5": "V",
        }
    },
    {
        type: "multiple",
        question: "Qual dos seguintes é um exemplo de recurso multimédia?",
        options: ["A)Um arquivo de texto puro (.txt)", "B)Um arquivo de imagem estática (.jpg)", "C)Um arquivo de áudio comprimido (.mp3)", "D)Todas as alternativas acima"],
        answer: "D)Todas as alternativas acima"
    },
    {
        type: "match",
        question: "Indique se as seguintes afirmações sobre formatos e codificação de multimédia são verdadeiras (V) ou falsas (F):",
        items: [
            { id: "1", text: "A codificação de multimédia é o processo de compressão de áudio, vídeo ou imagem para reduzir o tamanho do arquivo." },
            { id: "2", text: "Formatos de arquivo como MP3, MP4 e JPEG são usados para armazenar dados multimédia de forma compacta e eficiente." },
            { id: "3", text: "O formato MP4 é exclusivamente usado para armazenar áudio, não suportando dados de vídeo" },
            { id: "4", text: "A codificação de multimédia pode influenciar a qualidade do conteúdo, dependendo do nível de compressão aplicado." },
            { id: "5", text: " Codecs, como H.264 ou AAC, são algoritmos que comprimem e descomprimem dados multimédia para reduzir o armazenamento necessário e otimizar a transmissão." },
        ],
        options: [
            { id: "V", text: "Verdadeiro" },
            { id: "F", text: "Falso" },
        ],
        answer: {
            "1": "V",
            "2": "V",
            "3": "F",
            "4": "V",
            "5": "V",
        }
    },
    {
        type: "match",
        question: "Associe as aplicações multimédia aos seus principais usos.",
        items: [
            { id: "1", text: "Adobe Photoshop " },
            { id: "2", text: "Final Cut Pro " },
            { id: "3", text: "Audacity " },
            { id: "4", text: "Unity " }
        ],
        options: [
            { id: "A", text: "Edição de vídeo profissional." },
            { id: "B", text: "Criação e edição de gráficos e imagens." },
            { id: "C", text: "Criação de jogos e aplicações interativas." },
            { id: "D", text: "Edição de áudio." }
        ],
        answer: {
            "1": "B",
            "2": "A",
            "3": "D",
            "4": "C"
        }
    },
    {
        type: "multiple",
        question: "O que é uma imagem bitmap?",
        options: ["A) Uma imagem formada por formas geométricas", "B) Uma imagem formada por pixels", "c) Uma imagem que usa apenas preto e branco"],
        answer: "B) Uma imagem formada por pixels"
    },
    {
        type: "multiple",
        question: "Qual dos formatos abaixo é baseado em bitmap?",
        options: ["A) JPEG", "B) SVG", "C)EPS"],
        answer: "A) JPEG"
    },
    {
        type: "multiple",
        question: "Qual é uma vantagem principal das imagens vetoriais?",
        options: ["A) São ideais para fotografias detalhadas", "B) Podem ser escaladas sem perda de qualidade", "C) Ocupam sempre menos espaço em disco"],
        answer: "B) Podem ser escaladas sem perda de qualidade"
    },
    {
        type: "open",
        question: "Qual é a função do formato GIF?",
        answer: "GIF é um formato que suporta animações simples e transparência parcial. É comum em gráficos da web e imagens animadas curtas, embora tenha uma paleta de cores limitada (256 cores)."
    },
    {
        type: "multiple",
        question: "O que é profundidade de imagem?",
        options: ["A) O tamanho do arquivo da imagem", "B) A resolução da imagem", "C) O número de bits que representa a cor de cada pixel"],
        answer: "C) O número de bits que representa a cor de cada pixel"
    },
    {
        type: "multiple",
        question: "Quantas cores uma profundidade de 8 bits permite?",
        options: ["A) 16", "B) 256", "C) 16,7 milhões"],
        answer: "B) 256"
    },
    {
        type: "multiple",
        question: "Por que os arquivos de imagem bitmap podem ter tamanhos maiores que arquivos vetoriais?",
        options: ["A) São armazenados como formas geométricas", "B) Precisam armazenar informações de cada pixel", "C) São comprimidos automaticamente"],
        answer: "B) Precisam armazenar informações de cada pixel"
    },
    {
        type: "match",
        question: "Indique se a seguinte afirmação é verdadeira (V) ou falsa (F):",
        items: [
            { id: "1", text: "A resolução de uma imagem se refere ao número total de pixels que ela contém." },
          
        ],
        options: [
            { id: "V", text: "Verdadeiro" },
            { id: "F", text: "Falso" },
        ],
        answer: {
            "1": "V",
        }
    }
];
export default questions;
