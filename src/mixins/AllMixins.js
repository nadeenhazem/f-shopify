const AllMixins = {
  methods: {
    validEmail(email) {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      return re.test(email);
    },
    InputFocus(RefData) {
      RefData.placeholder = "";
    },
    InputBlur(RefData, text) {
      RefData != null ? (RefData.placeholder = text) : null;
    },
  },
};
export default AllMixins;
