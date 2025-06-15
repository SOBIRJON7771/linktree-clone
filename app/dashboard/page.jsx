'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
    const username = 'sobirjon'; // Boshida oddiy username. Keyinchalik login bilan o‘zgartirish mumkin.

    const [bio, setBio] = useState('');
    const [avatar, setAvatar] = useState('');
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState({ title: '', url: '' });

    useEffect(() => {
        const savedBio = localStorage.getItem(`${username}_bio`) || '';
        const savedAvatar = localStorage.getItem(`${username}_avatar`) || '';
        const savedLinks = JSON.parse(localStorage.getItem(`${username}_links`)) || [];

        setBio(savedBio);
        setAvatar(savedAvatar);
        setLinks(savedLinks);
    }, []);
    
    useEffect(() => {
        localStorage.setItem(`${username}_bio`, bio);
        localStorage.setItem(`${username}_avatar`, avatar);
        localStorage.setItem(`${username}_links`, JSON.stringify(links));
    }, [bio, avatar, links]);

    const addLink = () => {
        if (newLink.title.trim() && newLink.url.trim()) {
            setLinks([...links, newLink]);
            setNewLink({ title: '', url: '' });
        }
    };

    const deleteLink = (index) => {
        const updatedLinks = [...links];
        updatedLinks.splice(index, 1);
        setLinks(updatedLinks);
    };

    return (
        <div className="min-h-screen p-10 bg-gray-50">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

            <div className="mb-4">
                <label className="block mb-1 font-semibold">Bio:</label>
                <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-semibold">Avatar URL:</label>
                <input
                    type="text"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-semibold">Link title:</label>
                <input
                    type="text"
                    value={newLink.title}
                    onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
                    className="w-full p-2 border rounded mb-2"
                />
                <label className="block mb-1 font-semibold">Link URL:</label>
                <input
                    type="text"
                    value={newLink.url}
                    onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                    className="w-full p-2 border rounded mb-2"
                />
                <button
                    onClick={addLink}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    Qo‘shish
                </button>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">Linklaringiz:</h2>
                {links.length === 0 && <p>Hozircha link yo‘q.</p>}
                <ul className="space-y-2">
                    {links.map((link, index) => (
                        <li key={index} className="flex items-center justify-between bg-white p-2 rounded shadow">
                            <a href={link.url} target="_blank" className="text-blue-600 underline">{link.title}</a>
                            <button
                                onClick={() => deleteLink(index)}
                                className="text-red-600 hover:text-red-800 font-bold ml-4"
                            >
                                ❌
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
