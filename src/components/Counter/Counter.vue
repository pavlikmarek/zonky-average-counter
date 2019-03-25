<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="row">
            <div class="title">
              Spočítám ti průměrnou výši půjček pro daný rating
            </div>
          </div>
          <div class="row">
            <div class="counter">
              <div class="lable">Rating</div>
              <v-select
                label="rating"
                :options="options"
                @input="setRating"
              ></v-select>
              <div class="avarage">
                <template v-if="loading"
                  >NAČÍTÁNÍ</template
                >
                <template v-else>
                  <template v-if="this.getAverage">
                    <small>Průměrně se půjčuje:</small>
                    <br />
                    {{ this.getAverage }},- CZK
                  </template>
                  <template v-else
                    >Zvol si rating</template
                  >
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="d-none d-md-block col-md-4 image-wrapper">
          <img src="/img/zonky_cover.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Counter.ts"></script>
<style scoped lang="scss" src="./Counter.scss" />
<style lang="scss" src="./SelectorStyle.scss" />
