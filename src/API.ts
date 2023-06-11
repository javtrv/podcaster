export const API = {
  urlGetPodcasts: 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
  urlGetPodcastEpisodes: (podcastId: string) => `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=200`
}
