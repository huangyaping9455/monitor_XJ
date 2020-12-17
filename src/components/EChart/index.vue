<template>
    <div class="echart-base" :style="{height: height, width: width}"></div>
</template>

<script>
    export default {
        name: 'echart-base',
        props: {
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '100%'
            },
            chartOption: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        watch: {
            chartOption: {
                deep: true,
                handler(val) {
                    if (this.chart) {
                        this.setOption(val);
                    } else {
                        this.initChart();
                    }
                }
            }
        },
        data() {
            return {
                chart: null
            };
        },
        methods: {
            /**
             * 初始化图表实例
             */
            initChart() {
                this.chart = this.$echarts.init(this.$el, "custom");
                this.setOption(this.chartOption || {});
                this.chart.on("click", param => {
                    this.$emit("click", param);
                });
                this.chart.on("dblclick", param => {
                    this.$emit("dblclick", param);
                });
            },

            /**
             * 设置图标的option
             * @param {Object} option
             */
            setOption(option = this.chartOption) {
                this.chart.clear()
                this.chart.setOption(option);
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.initChart();
            });
        },
        beforeDestroy() {
            if (!this.chart) return;
            this.chart.dispose();
            this.chart = null;
        }
    };
</script>
