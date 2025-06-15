'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';

export default function UserProfile() {
    const { username } = useParams();
    const [dataLoaded, setDataLoaded] = useState(false);
    const [bio, setBio] = useState('');
    const [avatar, setAvatar] = useState('');
    const [links, setLinks] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined' && username) {
            const savedBio = localStorage.getItem(`${username}_bio`);
            const savedAvatar = localStorage.getItem(`${username}_avatar`);
            const savedLinks = localStorage.getItem(`${username}_links`);

            // Agar usernamega tegishli hech narsa topilmasa → 404
            if (!savedBio && !savedAvatar && !savedLinks) {
                notFound(); // Bu avtomatik 404 sahifani chaqiradi
                return;
            }

            setBio(savedBio || '');
            setAvatar(savedAvatar || '');
            setLinks(JSON.parse(savedLinks) || []);
            setDataLoaded(true);
        }
    }, [username]);

    if (!dataLoaded) return null; // Ma'lumot yuklanmaguncha hech narsa chiqmasin

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-10 bg-gray-100">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md text-center">
                {avatar && (
                    <img
                        src={avatar}
                        alt={`${username} avatar`}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                )}
                <h1 className="text-2xl font-bold mb-2 break-words">@{username}</h1>
                {bio && <p className="mb-4 text-gray-700 break-words">{bio}</p>}

                <div className="space-y-2">
                    {links.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition text-ellipsis overflow-hidden whitespace-nowrap"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}



