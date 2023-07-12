<style>
/* Video Player */
.player {
    margin: 10px;
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
}
    /* Video Portion */
    video {
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 12px;
    }
</style>

<script>
// @ts-nocheck
    export let videoURL
</script>

<div class="player">
    <video controls>
        <source src={videoURL} type="video/mp4">
        Your browser does not support the video tag.
    </video>    
</div>