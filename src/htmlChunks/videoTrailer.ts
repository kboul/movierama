import { VideoTrailer } from '../interfaces/videoTrailer';

export const videoTrailer = (videos: Array<VideoTrailer>) => {
    if (videos.length === 0) return 'No videos found.';
    return `
        <div class="embed-responsive embed-responsive-16by9 mt-2">
            <iframe 
                class="embed-responsive-item" 
                src="https://www.youtube.com/embed/${videos[0].key}" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
        </div>
    `;
};
