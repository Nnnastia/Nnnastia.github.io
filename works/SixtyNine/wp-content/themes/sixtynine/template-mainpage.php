<?php
/*
Template name: Головна сторінка
*/
get_header();?>

<section class="about" id="about">
    <div class="aboutUs wrap">
        <div class="aboutUsMain">
            <div class="aboutUsMain__slogan"><?php echo $your_settings['artical-subtitle'] ?></div>
            <h3 class="aboutUsMain__title"><?php echo $your_settings['artical-title'] ?></h3>
            <p class="aboutUsMain__text"><?php echo $your_settings['artical-text1'] ?></p>
            <p class="aboutUsMain__text"><?php echo $your_settings['artical-text2'] ?></p>
            <div class="aboutUsMain__btn">
                <a class="btn_default" href="">More About US</a>
            </div>
        </div>
        <div class="aboutUsItem">
            <h3 class="aboutUsItem__title"><?php echo $your_settings['post-title1'] ?></h3>
            <p class="aboutUsItem__text"><?php echo $your_settings['post-text1'] ?></p>
            <a href="#" class="aboutUsItem__link">Learn More&nbsp;&nbsp<i class="fas fa-arrow-right"></i></a>
        </div>
        <div class="aboutUsItem">
        <h3 class="aboutUsItem__title"><?php echo $your_settings['post-title2'] ?></h3>
            <p class="aboutUsItem__text"><?php echo $your_settings['post-text2'] ?></p>
            <a href="#" class="aboutUsItem__link">Learn More&nbsp;&nbsp<i class="fas fa-arrow-right"></i></a>
        </div>
        <div class="aboutUsItem">
        <h3 class="aboutUsItem__title"><?php echo $your_settings['post-title3'] ?></h3>
            <p class="aboutUsItem__text"><?php echo $your_settings['post-text3'] ?></p>
            <a href="#" class="aboutUsItem__link">Learn More&nbsp;&nbsp<i class="fas fa-arrow-right"></i></a>
        </div>
        <div class="aboutUsItem">
        <h3 class="aboutUsItem__title"><?php echo $your_settings['post-title4'] ?></h3>
            <p class="aboutUsItem__text"><?php echo $your_settings['post-text4'] ?></p>
            <a href="#" class="aboutUsItem__link">Learn More&nbsp;&nbsp<i class="fas fa-arrow-right"></i></a>
        </div>
    </div>
</section>
<section class="portfolio" id="portfolio">
    <div class="sectionText sectionText-padding wrap">
        <p class="sectionText__subtitle"><?php echo $your_settings['section-subtitle'] ?></p>
        <h2 class="sectionText__title"><?php echo $your_settings['section-title'] ?></h2>
    </div>
    <div class="portfolioWorks-bg">
        <div class="wrap">
            <div class="portfolioWorks">
                <div class="portfolioWorks__main">
                    <a href="#">
                    <img class="portfolioWorks__main-img" src="<?php if($your_settings['main-img']['url']){
		                echo $your_settings['main-img']['url'];
		            }else{
			            echo  get_template_directory_uri() . '/assets/images/Layer_9.png';
                    }?>" alt="work image">
                </a>
                </div>
                <div class="portfolioWorks__item">
                <a href="#">
                    <img class="portfolioWorks__item-img" src="<?php if($your_settings['first-img']['url']){
		                echo $your_settings['first-img']['url'];
		            }else{
                        echo get_template_directory_uri() . '/assets/images/Layer_2.png';
                    }?>" alt="work image">
                </a>
                </div>
                <div class="portfolioWorks__item">
                    <a href="#">
                        <img class="portfolioWorks__item-img" src="<?php if($your_settings['second-img']['url']){
                            echo $your_settings['second-img']['url'];
                        }else{
                            echo get_template_directory_uri() . '/assets/images/Layer_4.png';
                        }?>" alt="work image">
                    </a>
                </div>
                <div class="portfolioWorks__item">
                    <a href="#" class="portfolioWorks__link">View All<br><span>Works.</span></a>
                </div>
                <div class="portfolioWorks__item">
                    <a href="#">
                        <img class="portfolioWorks__item-img" src="<?php if($your_settings['third-img']['url']){
                            echo $your_settings['third-img']['url'];
                        }else{
                            echo get_template_directory_uri() . '/assets/images/Layer_5.png';
                        }?>" alt="work image">
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="reviews" id="reviews">
    <div class="wrap">
        <p class="reviews__text"><span>“</span> <?php echo $your_settings['text-review'] ?><span>“</span></p>
        <p class="reviews__author"><?php echo $your_settings['author-review'] ?></p>
    </div>
</section>
<section class="contact wrap" id="contact">
    <div class="sectionText sectionText-padding wrap">
        <p class="sectionText__subtitle"><?php echo $your_settings['contact-subtitle'] ?></p>
        <h2 class="sectionText__title"><?php echo $your_settings['contact-title'] ?></h2>
    </div>
    <a class="btn_default" href="">Contact Us</a>
</section>

<?php get_footer()?>