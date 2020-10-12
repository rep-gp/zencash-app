<template>
    <div class="company-data">
        <pre>
            {{ companyData }}
        </pre>
    </div>
</template>

<script>
export default {
    async asyncData ({ app: { $api } }) {
        return {
            companyData: await $api.base.get('/companies/0')
        }
    }
}
</script>
