export default function UserPage({ params }) {
    const { username } = params;

    const links = [
        { title: "Telegram", url: "https://t.me/sobirjon" },
        { title: "YouTube", url: "https://youtube.com" },
    ];

    return (
        <div style={{ padding: "2rem", fontFamily: "Arial" }}>
            <h1>{username} profili</h1>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
