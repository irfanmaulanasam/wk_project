<template>
  <div class="panel card">
    <div class="panel-heading post-thumb">
      <img class="img img-responsive" :src="image" />
    </div>

    <div class="panel-body">
      <a class="label" href="#">Label</a>
      <h3 class="post-title">
        <a href="#">{{title}}</a>
      </h3>
			<div class="wrapper">
				<p class="post-description"> {{description}}</p>
			</div>

      <div class="post-author">
        <a href="">lebih lanjut</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
		image: String,
		title:String,
		link:String,
		description:String
  },
};
</script>

<style scoped>


.panel {
  background-color: white;
  height: 225px;
  width: 160px;
  margin: 0.4em;
	border-radius: 0.5em;
	overflow: hidden;
	border: rgba(173, 170, 170, 0.678) solid 0.2em;
}
.panel-heading{
	width: 100%;
	height: 50%;
}
.panel-heading>img{
	padding: 1em 0 ;
	width: 100%;
}

.panel-body{
  position: relative;
  padding: 1.2em 0.2em 0;
	background: rgb(228, 225, 225);
	position: relative;
	height: 50%;
}
.label{
	font-weight: 300;
	font-size: x-small;
	text-decoration: none;
	position: absolute;
	color: black;
	top: 5px;
	padding: 0.2em;
	border-radius: 5px;
	border: gray solid 1px;
}
.label::after{
	content: ' |x';
}

.post-thumb {
  padding: 0;
}

.post-title{
	margin: 0.2em 0;
}

.post-title a {
  color: rgba(0, 0, 0, 0.7);
  font-weight: 700;
  line-height: 0.5em;
  letter-spacing: 0.01rem;
	font-size: medium;
}
.post-title a:hover {
  text-decoration: none;
}

.wrapper {
  max-width: 400px;
  margin: 0.1em auto;
}

.post-description {
	font-weight: lighter;
	font-size: smaller;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 150px;
}

/* posisi author selalu di bawah */
.post-author {
  position: absolute;
	background-color: white;
	width: 100%;
  bottom: 1.3em;
  left: 0;
  font-size: 13px;
	padding: 0.3em 1em ;
	border-top: gray solid 1px;
}
.post-author>a{
	text-decoration: none;
}
.post-author::after{
	content: ' >';
}
.card:hover {
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.2);
}
</style>