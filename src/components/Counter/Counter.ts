import { Component, Vue } from "vue-property-decorator";
import { Action, Getter, State } from "vuex-class";
import vSelect from "vue-select";

export type input = {
  rating: string;
};

@Component({
  components: {
    "v-select": vSelect
  }
})
export default class Counter extends Vue {
  @Action("average/setAverageByRating") setAverageByRating!: any;
  @Getter("average/average") getAverage!: any;
  loading: boolean = false;
  data() {
    return {
      selected: null,
      options: [
        { rating: "AAAAA" },
        { rating: "AAAA" },
        { rating: "AAAA" },
        { rating: "AAA" },
        { rating: "AA" },
        { rating: "A" },
        { rating: "B" },
        { rating: "C" },
        { rating: "D" }
      ]
    };
  }

  setRating(input: input | null): void {
    this.loading = true;
    this.setAverageByRating(input ? input.rating : null).then(() => {
      this.loading = false;
    });
  }
}
