<template>
	<v-app>
		<v-navigation-drawer app>
			<Menu/>
		</v-navigation-drawer>
		<Carrousel/>
		<Toolbar/>
		<Footer/>
	</v-app>
</template>

<script>
import Footer from '@/components/template/Footer.vue'
import Carrousel from '@/components/widgets/Carrousel.vue'
import Toolbar from '@/components/template/Toolbar.vue'
import Menu from '@/components/template/Menu.vue'

export default {
	components : {  Footer, Carrousel,  Toolbar,  Menu},
	
}
</script>
