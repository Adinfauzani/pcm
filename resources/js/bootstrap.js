import axios from 'axios';
import { usePage } from '@inertiajs/react';

axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]')?.content;

window.axios = axios;