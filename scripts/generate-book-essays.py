import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

with open(ROOT / "extracted_books.json", encoding="utf-8") as f:
    books = json.load(f)

meta = {
    "cardboard-boxer": {
        "date": "2023-11-20",
        "summary": "关于《废纸板拳击手》的观影感受，解读上帝、Pope 与陪伴的主题。",
        "tags": ["电影", "读书笔记"],
        "download": "/books/cardboard-boxer.docx",
    },
    "sheng-si-pi-lao": {
        "date": "2024-05-03",
        "summary": "关于莫言《生死疲劳》的阅读笔记，谈幽默、时间与六道轮回。",
        "tags": ["文学", "读书笔记"],
        "download": "/books/sheng-si-pi-lao.docx",
    },
    "zhi-huan-wang": {
        "date": "2023-11-12",
        "summary": "关于《指环王》三部曲的观影感受，谈凡人的英雄主义。",
        "tags": ["电影", "读书笔记"],
        "download": "/books/zhi-huan-wang.docx",
    },
}

lines = [
    "/**",
    " * 读书笔记（从 Word 文档导入）",
    " *",
    " * 修改方式：编辑下方数组，或替换 public/books/ 中的 docx 文件",
    " */",
    "",
    'import type { Essay } from "@/types/content";',
    "",
    "export const bookEssays: Essay[] = [",
]

for book in books:
    info = meta[book["slug"]]
    content = "\n\n".join(book["paragraphs"]).replace("\\", "\\\\").replace("`", "\\`")
    tags = ", ".join(f'"{tag}"' for tag in info["tags"])
    lines.extend(
        [
            "  {",
            f'    slug: "{book["slug"]}",',
            f'    title: "{book["title"]}",',
            f'    date: "{info["date"]}",',
            f'    summary: "{info["summary"]}",',
            f"    tags: [{tags}],",
            "    featured: true,",
            f'    downloadHref: "{info["download"]}",',
            f"    content: `{content}`,",
            "  },",
        ]
    )

lines.append("];")
lines.append("")

(ROOT / "src/data/book-essays.ts").write_text("\n".join(lines), encoding="utf-8")
print("written")
