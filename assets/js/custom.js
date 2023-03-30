$(function(){
    history.scrollRestoration = "manual"

    /**
     *  mouse move
     * 
     */


    gsap.set('body',{overflow:'hidden'})
    gsap.set('.sc-main .video-area',{xPercent:-50,yPercent:100})
    intro = gsap.timeline({
        defaults:{
            duration:1,
        }
    })
    var arr = $('.sc-main .text span').get();
    intro
    .to('.sc-main .video-area',{yPercent:-50 })
    .to('.sc-main .video-area',{ width:'100%' })
    .addLabel('a')
    .to('.sc-main .video-area',{ height:'100%' },'a')
    .to('.sc-main .video-area',{ 'border-radius':0 },'a')
    .addLabel('b')
    .to('.sc-main .video-area',{ height:'50%',width:'40%' },'b')
    .to('.sc-main .video-area',{ 'border-radius':20 },'b')
    .to('.header',{opacity:1, top:'36px'})
    .to('.sc-main .group-main .logo',{opacity:1,visibility: 'visible'})
    .to('body',{ delay:1,overflow:'initial'})


    // .to('.sc-main .group-main',{ width:'100%', height:'100%' },'a')
    // .to('.sc-main .group-main .video-area',{ width:'100vw',height:'100vh','border-radius':0},'a')
    // .to('.sc-main .group-main',{ width:'auto',  height:'auto' })
    // .addLabel('b')
    // .to('.sc-main .group-main .video-area',{ delay:1, width:'40vw',height:'50vh','border-radius':'40px'},'b')
    // .to('.sc-main .intro',{ delay:1, visibility: 'hidden'},'b')



    $(window).mousemove(function(e){
        xVal=e.clientX //내가보고있는 윈도우창에서의 좌표
        yVal=e.clientY //내가보고있는 윈도우창에서의 좌표

        gsap.to('.sc-main .cursor',1,{
            y:yVal-50,
            x:xVal-50
        })
    })






    $('.header .gnb-item a').click(function(e){
        e.preventDefault();
        area = $(this).data('area');
        gsap.to(window, {duration: 1, scrollTo:area});
    })




    // transform: translateX(-150%);

    rencontrer = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-rencontrer",
            start:'0% 0%',
            end:'300%',
            // markers:true,
            scrub:1,
            pin:true,
        },
    })

    rencontrer
    .addLabel('a')
    .to('.sc-rencontrer .inner4',{ xPercent:-150 },'a')
    .to('.sc-rencontrer .group-card .card-item:nth-child(odd)',{transform: 'translateY(10%)' },'a')
    .to('.sc-rencontrer .group-card .card-item:nth-child(even)',{ transform: 'translateY(-10%)' },'a')





    /**
     * @a -
     * @b -
     */
    
     $('.section').each(function(a,b){
        ScrollTrigger.create({
            trigger:b,
            start:"0% 10%",
            end:"100% 10%",
            // markers:true,
            onEnter:function(){
                w = $('.gnb-list li').eq(a).outerWidth();
                left = $('.gnb-list li').eq(a).position().left;
                $('.gnb-list li').eq(a).addClass('active').siblings().removeClass('active');
                gsap.to('.gnb-list .current',{
                    width:w,
                    left:left,
                    visibility:'visible'
                })
            },
            onEnterBack:function(){
                console.log('다시돌아옴');
                w = $('.gnb-list li').eq(a).outerWidth();
                left = $('.gnb-list li').eq(a).position().left;
                $('.gnb-list li').eq(a).addClass('active').siblings().removeClass('active');
                gsap.to('.gnb-list .current',{
                    width:w,
                    left:left,
                    visibility:'visible'
                })
            }
        })

    })

    $(window).resize(function(){
    
    })





    $('.sc-danser .swiper-slide').mousemove(function(e){
        xVal=e.offsetX //내가보고있는 윈도우창에서의 좌표
        yVal=e.offsetY //내가보고있는 윈도우창에서의 좌표
        
        item = $(this).find('.cursor');

        gsap.to(item,{
            y:yVal,
            x:xVal,
            visibility:'visible',
            opacity:1,
        })
    })
    $('.sc-danser .swiper-slide').mouseleave(function(){
        item = $(this).find('.cursor');
        gsap.to(item,{
            visibility:'hidden',
            opacity:0
        })
    })




    $('.daynnight').click(function(e){
        e.preventDefault();
        $(this).toggleClass('dark');
        $('body').toggleClass('dark');
    })



    $('.select-box button').click(function(e){
        e.preventDefault();
        $(this).siblings('.sub-list').toggle();
        $(this).toggleClass('on');
    })







    $('.search-list').each(function(a,b){
        item=$(this).find('.search-item');

        gsap.from(item,{
            scrollTrigger:{
                trigger:b,
                start:'0% 50%',
                end:'100% 0%',
                // markers:true,
            },
            opacity:0,
            yPercent:50,
            stagger:0.1
        })


    })

   






    ///메뉴바 미완성
    // const target = document.querySelector('.target');
    // const links = document.querySelectorAll('.header .group-header .gnb-list a');

    // for(let i = 0; i<links.length; i++){
    //     // links[i].addEventListener('click', (e) => e.preventDefault());
    //     links[i].addEventListener('mouseenter', mouseenterFunc);
    // }
    
    // function mouseenterFunc(){
    //     if(!this.parentNode.classList.contains('active')){
    //         for(let i = 0; i<links.length; i++){
    //             if(links[i].parentNode.classList.contains('active')){
    //                 links[i].parentNode.classList.remove('active');
    //             }
    //         }
    //         this.parentNode.classList.add('active');

    //         const width = this.getBoundingClientRect().width;
    //         const height = this.getBoundingClientRect().height;
    //         const left = this.getBoundingClientRect().left + window.pageXOffset;
            
    //         target.style.width = `${width}px`;
    //         target.style.height = `${height}px`;
    //         target.style.left = `${left}px`;
    //     }
            
    //     }



    // sc-explorer 스크롤 따라 비디오 움직이기


    // gsap.from('.inner3',{
    //     scrollTrigger{
    //         trigger:".inner3",
    //         start:"0% 0%",
    //         end:"100% 100%",
    //         pin:'.group-video'
    //     }










    var swiper = new Swiper(".danser-sd", {
        slidesPerView: 1.5, 
        spaceBetween:15,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
            }
        });
})


function videoPopup(frame,url){
    //video
    $('.link-youtu').click(function(e){
        e.preventDefault();
        html = `<div class="video-wrap">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${url}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`
        $(frame).html(html)
    })
}    

videoPopup('#video','yvsQq--S3QQ')