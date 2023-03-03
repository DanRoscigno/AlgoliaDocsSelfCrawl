
### Need to check into this to save on transactions:

https://github.com/chrisdmacrae/atomic-algolia

### Crawler

docker run --network host \
  -e "ALGOLIA_APP_ID=<your-app-id>" \
  -e "ALGOLIA_API_KEY=<your-api-key>" \
  -e "ALGOLIA_INDEX_NAME=<your-index-name>" \
  -e "ALGOLIA_INDEX_TYPE=<your-index-type>" \
  -e "ALGOLIA_SEARCH_KEY=<your-search-key>" \
  -e "ALGOLIA_SEARCH_INDEX=<your-search-index>" \
  -e "ALGOLIA_SEARCH_TYPE=<your-search-type>" \

