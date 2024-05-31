module.exports = {
  devServer: {
		proxy: {
			'^/api': {
				target: 'http://localhost:3005',
				changeOrigin: true
			},
      '^/cbi-crediti2c-app': {
        target: 'http://uat1.cbi-crediti2c-gateway.uatcbi.com',
        changeOrigin: true
      }
		}
	}
}
