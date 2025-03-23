// src/components/home/Tiles.tsx
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from "@repo/i18n/src/i18n";

import teaching from '../../assets/images/teaching.jpg';
import articles from '../../assets/images/articles.png';
import competition from '../../assets/images/compete.jpg';
import discussion from '../../assets/images/discussion.jpg';
import games from '../../assets/images/games.jpg';
import courses from '../../assets/images/courses.jpg';

import '../../styles/home/tiles.css';

interface TileItem {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    color: string;
}

const Tiles = () => {
    const tilesRef = useRef<HTMLElement>(null);

    const { t } = useI18n();

    // Tile data - in a production app, this would come from an API or CMS
    const tilesData: TileItem[] = [
        {
            id: 'teachers',
            title: `${t('tiles.tile1.title')}`,
            description: `${t('tiles.tile1.subtitle')}`,
            image: teaching,
            link: '/construction/teachers',
            color: '#8d82c4',
        },
        {
            id: 'courses',
            title: `${t('tiles.tile2.title')}`,
            description: `${t('tiles.tile2.subtitle')}`,
            image: courses,
            link: '/construction/courses',
            color: '#ec8d81',
        },
        {
            id: 'articles',
            title: `${t('tiles.tile3.title')}`,
            description: `${t('tiles.tile3.subtitle')}`,
            image: articles,
            link: '/construction/blog',
            color: '#6fc3df',
        },
        {
            id: 'games',
            title: `${t('tiles.tile4.title')}`,
            description: `${t('tiles.tile4.subtitle')}`,
            image: games,
            link: '/construction/games',
            color: '#e7b788',
        },
        {
            id: 'compete',
            title: `${t('tiles.tile5.title')}`,
            description: `${t('tiles.tile5.subtitle')}`,
            image: competition,
            link: '/construction/match',
            color: '#8ea9e8',
        },
        {
            id: 'discussion',
            title: `${t('tiles.tile6.title')}`,
            description: `${t('tiles.tile6.subtitle')}`,
            image: discussion,
            link: '/construction/discussion',
            color: '#87c5a4',
        },
    ];

    // Add animation effects when tiles come into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        // Observe all tile articles
        if (tilesRef.current) {
            const tileElements = tilesRef.current.querySelectorAll('.tile-article');
            tileElements.forEach((tile) => {
                observer.observe(tile);
            });
        }

        return () => {
            if (tilesRef.current) {
                const tileElements = tilesRef.current.querySelectorAll('.tile-article');
                tileElements.forEach((tile) => {
                    observer.unobserve(tile);
                });
            }
        };
    }, []);

    return (
        <section id="explore" className="tiles-section" ref={tilesRef}>
            <div className="section-header">
                <h2>{t('tiles.title')}</h2>
                <p>{t('tiles.subtitle')}</p>
            </div>

            <div className="tiles-container">
                {tilesData.map((tile) => (
                    <article
                        key={tile.id}
                        className="tile-article"
                        style={{
                            backgroundImage: `url(${tile.image})`,
                        }}
                        data-color={tile.color}
                    >
                        <span className="tile-background" style={{ backgroundColor: tile.color }}></span>
                        <div className="tile-content">
                            <header>
                                <h3>{tile.title}</h3>
                                <p>{tile.description}</p>
                            </header>
                            <Link to={tile.link} className="tile-link" aria-label={`Learn more about ${tile.title}`}>
                                <span className="link-text">{t('tiles.explore')}</span>
                                <span className="link-icon" aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Tiles;