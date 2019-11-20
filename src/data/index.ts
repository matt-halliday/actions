import * as fs from 'fs';
import * as process from 'process';
import * as path from 'path';

export const loadJSON = (file: string): any => {
    return JSON.parse(fs.readFileSync(path.resolve(process.cwd(), `./src/data/${file}`), 'utf8'));
};

export const shuffle = (items: any[]): any[] => {
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
};

export const rand = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const range = (length: number, max: number): number[] => {
    return Array.from({ length }, () => Math.floor(Math.random() * max));
};
