export default function UserPage({ params }) {
    const username = params.username;

    // TEST linklar, real localStorage bloklanmasin
    const links = [
        { title: "Telegram", url: "https://t.me/sobirjon" },
        { title: "YouTube", url: "https://youtube.com" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">{username} profili</h1>
            <ul>
                {links.map((link, idx) => (
                    <li key={idx}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
