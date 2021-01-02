<template>
  <SectionLayout
    title="beberapa hasil karya kami"
    name="portfolio"
    bg="rgba(219, 216, 216, 0.521)"
  >
    <div v-for="i in muchLoop" :key="i" slot="content">
      <Grid :amount="imageList.length" :content="getLoopData(i,checkLoop(i))" :loop="checkLoop(i)"/>
    </div>
  </SectionLayout>
</template>
<script>
export default {
  data() {
    return {
      amount: 18,
      muchLoop:null,
      imageList:[
        {

          image:1,
          title:'',
          desc:''
        },
        {
          image:2,
          title:'',
          desc:''
        },
        {
          image:3,
          title:'',
          desc:''
        },
        {
          image:4,
          title:'',
          desc:''
        },
        {
          image:5,
          title:'',
          desc:''
        },
        {
          image:6,
          title:'',
          desc:''
        },
        {
          image:7,
          title:'',
          desc:''
        },
        {
          image:8,
          title:'',
          desc:''
        },
        {
          image:9,
          title:'',
          desc:''
        },
        {
          image:10,
          title:'',
          desc:''
        },
        {
          image:11,
          title:'',
          desc:''
        },
        {
          image:12,
          title:'',
          desc:''
        },
        {
          image:13,
          title:'',
          desc:''
        },
        {
          image:14,
          title:'',
          desc:''
        },
        {
          image:15,
          title:'',
          desc:''
        },
        {
          image:16,
          title:'',
          desc:''
        },
        {
          image:17,
          title:'',
          desc:''
        },
        {
          image:18,
          title:'',
          desc:''
        },       
      ],
    };
  },
  methods: {
    checkLoop(i) {
      let current = i * 5 > this.amount ? this.amount - (i - 1) * 5 : 5;
      return current
    },
    getLoopData(i,current){
      let data = []
      let start = 0
      let finish = null
      if (current == 5 && i == 1) {
          finish = current
      } else if (i>1 && current == 5) {
        start = current *(i-1)
        finish = current * i
      } else if (current < 5){
        start = this.amount - current
        finish = this.amount
      } 
      for (let index = start; index < finish; index++) {
        data.push(this.imageList[index])
      }
      return data
    },
  },
  mounted() {
    this.muchLoop = Math.round(this.amount / 5);
  },
};
</script>
<style scoped>
/* #portfolio {
  margin: 0.5rem 0.5rem;
  background-color: rgba(219, 216, 216, 0.521);
  padding: 0.4rem;
} @media screen and (max-width: 1000px) {
  #portfolio {
    margin: 0.2rem 0.2rem;
    padding: 0.2rem;
  }
} */
</style>