<template>
    <v-row>
        <v-col>
            <h2 class="mbr-section-title pb-3 mbr-fonts-style display-5">My Gift Cards</h2>
            <v-card class="mx-auto" max-width="400">
                <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover>
                    <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-4">
                    Number 10
                </v-card-subtitle>

                <v-card-text>
                    <div>Whitehaven Beach</div>

                    <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="orange">
                        Share
                    </v-btn>

                    <v-btn color="orange">
                        Explore
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>


    export default {
        
    }
</script>

<script setup>
    useHead({
        title: 'Gift Cards',
    })
</script>