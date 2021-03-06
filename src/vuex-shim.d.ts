import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { RootState } from './store/state'

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$store: Store<RootState>
	}
}
