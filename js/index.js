new Vue({
  el: '#resume',
  data: {
  	img : 'img/free.jpg',
    name: '钟彩亮',
    email: '18379184205@163.com',
    phone: '18379184205',
    jobtimes : '2016-10',
    job : '求职意向：前端工程师',
    salaryname : '薪资',  
    salary : '10.5~12.5',
    jobtimesale : '',
    education_ba : '教育背景',
    education : [{
    	school : '江西科技职业学院',
    	region : '江西',
    	time : '2014-2017',
    	degree : '学士',
    	professional : '软件工程专业',
    	course : '专科',
    }],
	skills : '专业技能',
    skills_info : [
    	{
    		id : '1',
    		name : '语言',
	    	language : '熟练掌握 HTML5+CSS3+JS(ES5/6/7)，有网站、WebApp和后台系统开发经验，注重细节与用户体验',
    	},
    	{
    		id : '3',
    		name : '框架',
	    	language : '熟练掌握 Vue (vuex/vue-router/ElementUI/VantUI 等)，有多个项目经验',
    	},
    	{
    		id : '4',
    		name : '数据库',
	    	language : '熟悉使用 React (react-router/redux/react-hooks)ySql/MongoDB/webSql',
    	},
    	{
    		id : '5',
    		name : '前端工具 ',
	    	language :'熟悉微信公众号、微信⼩程序开发、混合APP开发',
		},
		{
    		id : '5',
    		name : '前端工具 ',
	    	language :'熟练使用 npm 与 webpack 工程化系统，熟练使用 git 协同开发',
		},
		{
    		id : '5',
    		name : '前端工具 ',
	    	language :'熟悉熟练使用 Bootstrap、jQuery、Swiper、ECharts 等库，熟练掌握 AJAX (XHR/axios) 并能解决跨域问题微信公众号、微信⼩程序开发、混合APP开发',
		},
		{
    		id : '5',
    		name : '前端工具 ',
	    	language :'熟练使用 Linux 开发与部署项目，能配置 NGINX，熟悉 Node.js、MySQL/MongoDB 等后端技术',
		},
    ],
	project_experience : '工作经历&项目经历',
	project_item:[
		{
			project_company:'前海铂智科技有限公司',
			project_info : [
				{
					id : '7',
					projuct_name : '寓小弟（微信公众号）',
					describe : [
						{
							info : '项目的开发技术采用 Vue+mint-ui，之所以采用 Vue 开发，是因为 Vue 在公众号上兼容性较好。',
						},
						{
							info : '房态展示这块封装下拉选择组件，可以根据楼栋，房型，是否在住筛 选房间。',
						},
						{
							info : '房态展示这块封装下拉选择组件，可以根据楼栋，房型，是否在住筛 选房间。',
						}
					]
				},
				{
					id : '7',
					projuct_name : '寓小弟（微信公众号）',
					describe : [
						{
							info : '项目的开发技术采用 Vue+mint-ui，之所以采用 Vue 开发，是因为 Vue 在公众号上兼容性较好。',
						},
						{
							info : '房态展示这块封装下拉选择组件，可以根据楼栋，房型，是否在住筛 选房间。',
						},
						{
							info : '房态展示这块封装下拉选择组件，可以根据楼栋，房型，是否在住筛 选房间。',
						}
					]
				}
			]	
		},
		{
			project_company:'前海铂智科技有限公司',
			project_info : [
				{
					id : '7',
					projuct_name : '寓小弟（微信公众号）',
					describe : [
						{
							info : '项目的开发技术采用 Vue+mint-ui，之所以采用 Vue 开发，是因为 Vue 在公众号上兼容性较好。',
						},
						{
							info : '房态展示这块封装下拉选择组件，可以根据楼栋，房型，是否在住筛 选房间。',
						},
						{
							info : '房态展示这块封装下拉选择组件，可以根据楼栋，房型，是否在住筛 选房间。',
						}
					]
				},
				{
					id : '7',
					projuct_name : '寓小弟（微信公众号）',
					describe : [
						{
							info : '项目的开发技术采用 Vue+mint-ui，之所以采用 Vue 开发，是因为 Vue 在公众号上兼容性较好。',
						},
						{
							info : '房态展示这块封装下拉选择组件，可以根据楼栋，房型，是否在住筛 选房间。',
						},
						{
							info : '房态展示这块封装下拉选择组件，可以根据楼栋，房型，是否在住筛 选房间。',
						}
					]
				}
			]	
		}
		
	],
    
    person_product : '个人项目',
    person_info : [
    	{
    		id : '1',
    		name : '在线系统',
	    	url : 'notes-vuepress',
	    
    	},
    	{
    		id : '2',
    		name : '我的个人博客',
	    	url : 'notes-vuepress',
	    	
    	},
    	{
    		id : '3',
    		name : '终端管理系统(毕业设计)',
	    	url : '全站开发',
    	}
    ],
  },
  methods:{
  	date : function(data){
  		var jobdate = this.jobtime(data,this.start());
		this.jobtimesale = jobdate;
  		return jobdate;
  	},
  	start : function(){
  		  var date = new Date();
		    var y = date.getFullYear();  
		    var m = date.getMonth() + 1;
		    var d = date.getDate();
		 if(d>=15){
		    m=m+1;
		   }
		   if(m>12){
			y= y+1;
		   	m=m-12;
		   }
		    m = m < 10 ? ('0' + m) : m;
	          
		  
		    return y+'-'+m;
  	},
  	jobtime : function(start,end){
  		var staryear = start.split('-'),
  			endyear = end.split('-');
  		var month = '',year = '';
		if(endyear[1]-staryear[1]<0){
			endyear[0] = endyear[0]-1;
			month = Number(endyear[1])+12-Number(staryear[1]);
		}else{
			month = endyear[1]-staryear[1];
		}
		year = endyear[0]-staryear[0];
		return year+'年'+month+'月';
  	},
	salarys : function(data){
		var salar = data.split('~');
		let start = Number(salar[0]),
			end =  Number(salar[1])
		let year = Number(this.jobtimesale.split('年')[0]),month = Number(this.jobtimesale.split('年')[1].split('月')[0]);
		if(year>=2){
		    let syear = year-1;
		    start+=syear+2;
		    end+=syear+2;
		}
		if(month>6){
			let smonth = (month)/3;
		    start+=smonth*0.5;
		    end+=smonth*0.5;	
		}
		return start.toFixed(1)+'~'+end.toFixed(1);
	}
  }
})
