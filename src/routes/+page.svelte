<style>
  /* styling the header */
  h5 {
    color: white;
    font-size: 20px;
  }

  @media (max-width: 700px){
    h5 {
      display:none
    }
  }

  .section-header {
    width:100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 20px;
    background-color: black;
  }
    .section-header #small-logo {
      height:20px;
      padding-right: 35%
    }

    .section-header #large-logo {
      height:30px;
      padding-right: 15px
    }

    /* styling the video */
    .section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

      .section .player{
        height:100%;
        width:100%;
        padding-bottom: 30px
      }

      .section .button-list{
        display: flex;
      }

      .section button {
        width: 200px;
        height: 60px;
        border-radius: 12px;
        background-color: #ffffff;
        color: #d51477;
        border: 5px solid #ffb6c1;
        padding: 5px;
        font-size: 20px;
        text-decoration: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-right: 20px;
      }

      .section button:hover {
        transform: scale(0.98);
      }
    
    /* styling the footer */
    p {
    color: white;
    }
    .section-footer {
      bottom: 0;
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 0;
      background-color: black;
    }

    @media (max-width: 1200px){
    .section-footer {
      display:none
    }
  }


</style>

<script>
	import Videoplayer from '../components/Videoplayer.svelte';
	export let data;
	function downloadVideo() {
		// Create a new a tag
		let link = document.createElement('a');

		// Set download href and name
		link.href = data.SAMPLE_VIDEO_URL;
		link.download = data.SAMPLE_VIDEO_URL;

		// append the tag into the doc
		document.body.appendChild(link);

		// click the link
		link.click();

		document.body.removeChild(link);
	}
</script>

<div class="section-header">
	<img src="pikrex_logo.png" alt="logo" id="small-logo"/>
	<img src="/favicon.png" alt="logo" id="large-logo"/>
	<h5>Online Video Player and Downloader</h5>
</div>

<div class="section">
	<div class="player">
		<div>
			<Videoplayer videoURL={data.SAMPLE_VIDEO_URL} />
		</div>
	</div>

  <div class="button-list">
    <button>⬅️ Go Back</button>
    <button on:click={downloadVideo}>⏬ Download Video</button>
  </div>
</div>

<div class="section-footer">
	<p>Copyright 2023. Pikrex Inc.</p>
</div>
