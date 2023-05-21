import { Box } from "@chakra-ui/react";

const StatsYoutubeEmbed = () => {
    const ratio = (315 / 560) * 100;
    return (
      <Box
        paddingTop={`${ratio}%`}
        position="relative"
        height="0"
        overflow="hidden"
        frameBorder="0"
      >
        <video
          style={{ position: "absolute", top: 0, bottom: 0 }}
          width="100%"
          
          src={"/Video1.mp4"}
          type="video/mp4"
          controls
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </Box>
    );
}

export default StatsYoutubeEmbed