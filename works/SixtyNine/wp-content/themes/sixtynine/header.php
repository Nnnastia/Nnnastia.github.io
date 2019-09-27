<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package SixtyNine
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,700i|Source+Sans+Pro:300,400,600,700&amp;display=swap&amp;subset=cyrillic" rel="stylesheet">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css">
	<?php wp_head(); ?>
</head>
<?php global $your_settings; ?>
<body <?php body_class(); ?>>
	<header class="header">
		<div class="wrap">
			<div class="header-flex">
				<a href="#header" class="logo">
				<?php bloginfo( 'name' ); ?>
					<div class="logo__rectangle"></div>
				</a>
				<nav class="menu">
					<input type="checkbox" class="navCheckbox" id="navCheckbox">
					<label for="navCheckbox" class="burgerMenu">
						<span class="burgerMenu__item"></span>
					</label>
					<?php
						wp_nav_menu( array(
							'theme_location' => 'menu-1',
							'menu_id' => 'primary-menu',
							'menu_class' => 'nav__list',
							'container_class' => 'nav',
							'add_li_class'  => 'nav__item',
						) );
					?>
				</nav>
			</div>
			<div class="slogan">
				<p class="slogan__text">
					<?php echo $your_settings['slogan-first'] ?> <br>
					<?php echo $your_settings['slogan-last'] ?>
				</p>
				<a class="btn_default" href="#">Know More</a>
			</div>
		</div>
	</header>
