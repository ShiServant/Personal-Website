# -*- coding: utf-8 -*-
"""Rebuild book-essays.ts with bilingual fields. Chinese body kept; English body provided."""
from pathlib import Path
import re

src = Path(r"E:\My_Website\src\data\book-essays.ts").read_text(encoding="utf-8")
matches = re.findall(
    r'slug: "([^"]+)"[\s\S]*?content: `([\s\S]*?)`,',
    src,
)
zh_contents = {slug: content for slug, content in matches}
assert set(zh_contents) == {
    "cardboard-boxer",
    "sheng-si-pi-lao",
    "zhi-huan-wang",
}

en_contents = {
    "cardboard-boxer": """I first learned about this film while scrolling videos on Bilibili. At first I watched it mostly to broaden the kinds of movies I would sit through. The emotional impact surprised me. Cardboard Boxer is a small art-house film — no tangled plot machinery, no spectacular effects, no A-list cast. That seemingly inexpensive surface is exactly what makes its honesty cut so deep.

I will not retell the whole story here, but the notes below include plot details (spoilers). These are a few of the director's choices that stayed with me.

First, the image of “God” and the appearance of the missionary. The Bible the missionary gives Willie and the little girl’s diary form a sharp contrast across the film. Both gestures hope Willie will believe in a kind of God: the missionary wants him to find God through scripture; the girl wants Willie to become her God. The shared word produces opposite effects. For the missionary, God is a savior — a companion for a peaceful death. For Willie, God is only a spiritual symbol: God cannot feed or house him, cannot sit with him in loneliness, and the Bible offers little real support. Traditional “God” becomes almost ironic in Willie’s eyes — hollow when you are homeless. The “God” in the girl’s diary is different: a guardian and companion, which is what Willie needs most. In practice the film splits that figure into two parts. The girl and her diary become companionship; Pope becomes protection. That reading matches the film’s actions: Willie’s grief when the diary is lost, and Pope’s repeated, selfless help for people with nowhere to go.

Second, Pope’s past. He is the protector of the film, yet we never learn his history. He might be simply kind, someone who escaped homelessness, or a community worker. I prefer the reading that he once lived on the street himself. In the film he is only a taxi driver — not someone with endless money or free time. Perhaps out of solidarity with people like him, he holds a fragile community together and asks others without homes to protect one another. That design serves a dramatic purpose: community is everywhere in human life, even if Willie does not see it at first.

Finally, the girl’s appearance at the end. For me her dramatic meaning outweighs strict plot logic, and the film introduces her from diary into reality without feeling forced. Her arrival marks the emotional peak; the embrace is carefully staged. The gray palette finally softens into a clear afternoon. Willie’s hands, wrapped in white bandages, cross over his chest at the corner — the first pure white on his body, a sign that after the test of money and Pope’s warning he sheds a material fixation and becomes the kind of angel the girl needed. When she appears and holds him, he holds her like an angel in return; she, as his angel, finally steps into the world and washes away a loneliness that had been sealed for a long time.

End. For a small film, the impact is greater than many expensive studio pictures. It shows the deepest human fear — loneliness — and also the quiet “stations of companionship” buried throughout the world.""",
    "sheng-si-pi-lao": """Life and Death Are Wearing Me Out

For Mo Yan’s Life and Death Are Wearing Me Out, I want to talk about two things: humor and time.

I do not claim much literary critical skill — my school essays were often torn apart by teachers — so when I read, I care less about fine technique than about what those choices make a reader feel. Technique exists to serve the book’s larger subject.

“People in the 1950s were relatively pure; in the 1960s, fanatical; in the 1970s, fearful; in the 1980s, calculating; in the 1990s, deeply corrupted.”

The first shock the novel gave me was its sense of time. Through six reincarnations Mo Yan spans fifty of modern China’s fastest-changing years: from mud houses to brick, carts to cars, from village innocence to worldly cunning; from communal land to private ownership and the return of personal ambition; from shifting ideals in people’s minds. Fitting that scale into one novel should be nearly impossible. Mo Yan’s move is to cast five animal “lives” — donkey, ox, pig, dog, monkey — as reincarnations of landlord Ximen Nao. The animals keep instinct and also leftover human wit and temperament. Born into the human world yet set apart from it, the protagonist can read human feeling while remaining, bodily, an outsider — a camera recording fifty years of change. From that angle Mo Yan can reveal desire behind closed doors: Blue Liberation’s affair with Pang Chunmiao; Ximen Jinlong’s dealings with Pang Kangmei. As Ximen Nao the man, those scenes would be hard to justify; as animals, they become possible. That imprint of an era on every character is one of the book’s lasting powers.

The second shock is Mo Yan’s humor — the ability to stay funny inside pain and pressure. Unlike Yu Hua, who sometimes keeps humor for the writer and pain for the reader, Mo Yan sends you on a roller coaster between the two. Under that humor is a kind of release: after living through too much, you can still laugh. Across reincarnations Ximen Nao’s rage softens; animal nature takes more space; memory grows quieter. Mo Yan once wrote: the dead cannot live again, and the living must keep living — crying or laughing, it is still living. In Ximen Nao we see a calm toward life’s rises and falls, and a refusal to cling too hard to any single moment. Humor is that attitude made audible: laughing hardest at the hardest times.

This note could end here, but while resting I noticed a reading of the Great Arbiter of Fate from classical poetry: death continues life, and life begins death — a cycle without end. Mo Yan’s view of life and death in this novel sits in that Chinese tradition of treating both with an even mind. David Eagleman’s idea of three deaths — biological, legal, social — also echoes here: social death is being forgotten. Rituals that remember ancestors keep people from vanishing completely; memory itself becomes a kind of reincarnation. Books remember writers; forests remember animals; families remember people.

Wherever the old wind blew, for better or worse — guide the next wind, and keep going with it.

The dead cannot live again, and the living must keep living. Crying or laughing, it is still living.
— Mo Yan

“Wine and song — how long is a life?”
— Cao Cao""",
    "zhi-huan-wang": """Out of idle boredom I was browsing Douban’s high-score list when I found The Lord of the Rings. Until then I mostly remembered the massed armies in a later war film and the overwhelming praise. What really hooked me was a question: how does a fantasy-war-drama built on Middle-earth earn a place among Douban’s top hundred, a list usually ruled by art films? Over two or three weeks I finished the original trilogy, and the scores proved deserved.

The story follows Frodo Baggins as he inherits the Ring and, through danger, carries it toward Mordor to destroy it and end Sauron’s power. The outline echoes Journey to the West: ordinary heroes given a vast task. The difference is that Tang Sanzang travels with four companions, while the Fellowship of nine thins until only Sam and Frodo walk into Mordor — and that changes what the story is about.

Across roughly ten hours of film, every character faces one or many tests: Aragorn and love; Sam, Gollum, and Frodo and the Ring; Merry and Pippin and war and courage. As the Ring nears Mordor, choices harden into transformation. Not everyone passes. On the stairs to Mordor, Gollum’s lies make Frodo distrust Sam — a failure of friendship and faith. The trilogy’s grace is that failed tests are not the end: people recognize mistakes later and begin again, as we do in ordinary life. We watch four hobbits leave the Shire’s ease and grow. At first their small bodies barely matter in battle; later Merry and Pippin sway the Ents against Saruman; Sam faces the spider with steel and wit and rescues Frodo; Frodo finally resists the Ring and sends Gollum into the fire. When Gondor bows to the four, they have become giants in spirit.

The Lord of the Rings is not a portrait of one ready-made hero in the Western mold. It shows how a hero is made — not by sudden powers, gift, or destiny alone, but step by step from an ordinary person through suffering most people never meet. What keeps the films lasting is not only war spectacle or elven beauty, but a moving claim: the heroism of ordinary people.""",
}

meta = {
    "cardboard-boxer": {
        "title": ("废纸板拳击手", "Cardboard Boxer"),
        "date": "2023-11-20",
        "summary": (
            "关于《废纸板拳击手》的观影感受，解读上帝、Pope 与陪伴的主题。",
            "Notes on Cardboard Boxer — God, Pope, and companionship.",
        ),
        "tags": [("电影", "Film"), ("读书笔记", "Reading notes")],
        "download": "/books/cardboard-boxer.docx",
    },
    "sheng-si-pi-lao": {
        "title": ("生死疲劳", "Life and Death Are Wearing Me Out"),
        "date": "2024-05-03",
        "summary": (
            "关于莫言《生死疲劳》的阅读笔记，谈幽默、时间与六道轮回。",
            "Notes on Mo Yan’s novel — humor, time, and reincarnation.",
        ),
        "tags": [("文学", "Literature"), ("读书笔记", "Reading notes")],
        "download": "/books/sheng-si-pi-lao.docx",
    },
    "zhi-huan-wang": {
        "title": ("指环王", "The Lord of the Rings"),
        "date": "2023-11-12",
        "summary": (
            "关于《指环王》三部曲的观影感受，谈凡人的英雄主义。",
            "Notes on the LOTR trilogy — the heroism of ordinary people.",
        ),
        "tags": [("电影", "Film"), ("读书笔记", "Reading notes")],
        "download": "/books/zhi-huan-wang.docx",
    },
}

order = ["cardboard-boxer", "sheng-si-pi-lao", "zhi-huan-wang"]


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`")


lines = [
    "/**",
    " * 读书笔记（从 Word 文档导入）",
    " *",
    " * 每个文案字段包含 zh / en。可替换 public/books/ 中的 docx。",
    " */",
    "",
    'import type { Essay } from "@/types/content";',
    "",
    "export const bookEssays: Essay[] = [",
]

for slug in order:
    m = meta[slug]
    tags = ",\n      ".join(
        f'{{ zh: "{zh}", en: "{en}" }}' for zh, en in m["tags"]
    )
    lines += [
        "  {",
        f'    slug: "{slug}",',
        f'    title: {{ zh: "{m["title"][0]}", en: "{m["title"][1]}" }},',
        f'    date: "{m["date"]}",',
        f'    summary: {{ zh: "{m["summary"][0]}", en: "{m["summary"][1]}" }},',
        f"    tags: [\n      {tags},\n    ],",
        "    featured: true,",
        f'    downloadHref: "{m["download"]}",',
        "    content: {",
        f"      zh: `{esc(zh_contents[slug])}`,",
        f"      en: `{esc(en_contents[slug])}`,",
        "    },",
        "  },",
    ]

lines += ["];", ""]
Path(r"E:\My_Website\src\data\book-essays.ts").write_text(
    "\n".join(lines), encoding="utf-8"
)
print("ok")
