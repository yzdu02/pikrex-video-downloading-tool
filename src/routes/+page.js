/*
This current JS file takes in a static MP4 file.
In the future, this should be a backend fetch that returns a MP4 URL.
*/

const SAMPLE_VIDEO_URL = 'sample-video.mp4';

export async function load({ params }) {
	return { SAMPLE_VIDEO_URL };
}
