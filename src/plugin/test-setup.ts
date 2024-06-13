import { config } from '@vue/test-utils'
import { vuetify } from '@/main'

// setup global config to test-utils
config.global.plugins = [vuetify]
