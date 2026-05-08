<script lang="ts">
	import './layout.css';
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/images/icon-logo.png" />
</svelte:head>

<header>
	<Navbar 
		class="fixed top-0 start-0 z-50 w-full border-b border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-600 py-1"
		fluid
	>
		<NavBrand href="/">
			<img src="/images/icon-logo.png" class="me-3 h-6" alt="Logo" />
			<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
				<ruby>認知<rt>にんち</rt></ruby>バイアス<ruby>非公式<rt>ひこうしき</rt></ruby><ruby>図鑑<rt>ずかん</rt></ruby>
			</span>
		</NavBrand>
		<NavHamburger class="w-10 h-10" />
		<NavUl>
			<NavLi href="/" class="md:py-0">Home</NavLi>
			<NavLi href="/bias" class="md:py-0"><ruby>認知<rt>にんち</rt></ruby>バイアスとは</NavLi>
			<NavLi href="/#list" class="md:py-0">バイアス<ruby>四天王<rt>してんのう</rt></ruby></NavLi>
			<NavLi href="/about" class="md:py-0">このサイトについて</NavLi>
		</NavUl>
	</Navbar>
</header>

<main class="pt-15">
	{@render children()}
</main>

<Footer class="text-center">
	<FooterCopyright href="/" by="認知バイアス非公式図鑑" year={2026} />
	<FooterLinkGroup class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
		<FooterLink href="/bias"><ruby>認知<rt>にんち</rt></ruby>バイアスとは</FooterLink>
		<FooterLink href="/#list">バイアス<ruby>四天王<rt>してんのう</rt></ruby></FooterLink>
		<FooterLink href="/about">このサイトについて</FooterLink>
		<FooterLink href="/about#disclaimer"><ruby>免責事項<rt>めんせきじこう</rt></ruby></FooterLink>
	</FooterLinkGroup>
</Footer>
