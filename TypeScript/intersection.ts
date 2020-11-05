interface ErrorHandling {
    success: boolean;
    error?: { message: string };
  }

  interface ArtworksData {
    artworks: { title: string }[];
  }

  interface ArtistsData {
    artists: { name: string }[];
  }

// These interfaces are composed to have
// consistent error handling, and their own data.

  type ArtworksResponse = ArtworksData & ErrorHandling;
  type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message)
    return
  }

  console.log(response.artists)
}
