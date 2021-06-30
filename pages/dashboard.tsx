import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { Flex, Image, Text, Button, Grid } from "theme-ui";
import CardButton from "../components/CardButton";
import CardPrevention from "../components/CardPrevention";
import CardVideoSymptoms from "../components/CardVideoSymptoms";
import CardImageSymptoms from "../components/CardImageSymptoms";
import CardDiagnosis from "../components/CardDiagnosis";
import Footer from "../components/Footer";
import MenuIcon from "../public/menu.svg";
import GlassIcon from "../public/glass.svg";
import Selection from "../components/Selection";
import PhoneIcon from "../public/phone.svg";

const Items = [
  {
    id: 1,
    label: "Prevention",
    value: "1",
  },
  {
    id: 2,
    label: "Symptoms",
    value: "2",
  },
  {
    id: 3,
    label: "Diagnosis",
    value: "3",
  },
];

const PreItems = [
  {
    image: "/images/logo1.PNG",
    nameCard: "Wear a facemask",
    description: "You should wear facemask when you are around other people",
    numberDiscussions: "153",
  },
  {
    image: "/images/logo2.PNG",
    nameCard: "Avoid close contact",
    description: "Put distance between yourself and other people",
    numberDiscussions: "127",
  },
  {
    image: "/images/logo3.PNG",
    nameCard: "Stay home if you’re sick",
    description: "Stay home if you are sick, except to get medical care.",
    numberDiscussions: "78",
  },
  {
    image: "/images/logo4.PNG",
    nameCard: "Clean your hands often",
    description: "Clean your hands often",
    numberDiscussions: "324",
  },
];

const dashboard: FC = () => {
  const router = useRouter();
  const [close, setClose] = useState(false);
  const [val, setVal] = useState("1");

  const handleClick = () => {
    if (!close) setClose(true);
  };

  return (
    <Flex
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Flex
        bg="#F4F0EB"
        sx={{
          width: 360,
          height: 700,
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        <Flex
          bg="#ED3D3D"
          sx={{
            height: close ? 90 : 200,
            width: "100%",
          }}
        >
          <Flex
            bg="#ED3D3D"
            mt={20}
            mx={15}
            sx={{
              width: "100%",
              height: 30,
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 99,
            }}
          >
            <Flex
              sx={{
                cursor: "pointer",
                transition: "all 0.3s ease-in-out 0s",
                ":active": {
                  transform: "scale(0.90)",
                },
              }}
            >
              <MenuIcon />
            </Flex>
            <Flex
              onClick={() => {
                router.reload();
              }}
              sx={{
                cursor: "pointer",
                transition: "all 0.3s ease-in-out 0s",
                ":active": {
                  transform: "scale(0.95)",
                },
              }}
            >
              <Image src="/images/corona.PNG" variant="corona" />
            </Flex>
            <Flex
              sx={{
                cursor: "pointer",
                transition: "all 0.3s ease-in-out 0s",
                ":active": {
                  transform: "scale(0.95)",
                },
              }}
            >
              <GlassIcon />
            </Flex>
          </Flex>
        </Flex>
        {!close && (
          <Flex
            mt={-130}
            sx={{
              zIndex: 99,
            }}
          >
            <CardButton
              title="Coronavirus disease (COVID-19) advice for the public"
              content="Stay aware of the latest information on the COVID-19 outbreak"
              onClick={handleClick}
            />
          </Flex>
        )}
        <Flex
          mt={-160}
          sx={{
            height: 480,
            width: "100%",
          }}
        >
          <Flex
            mt={close ? 137 : 185}
            sx={{
              width: "100%",
              flexDirection: "column",
            }}
          >
            <Flex
              sx={{
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Selection
                items={Items}
                onClick={(value) => {
                  setVal(value);
                  if (!close && value !== "1") setClose(true);
                }}
                selectedItem={Items[0]}
              />
              {val === "1" ? (
                <Flex
                  sx={{
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {PreItems.map((item, index) => (
                    <Flex key={index}>
                      <CardPrevention
                        onClick={handleClick}
                        image={item.image}
                        nameCard={item.nameCard}
                        description={item.description}
                        numberDiscussions={item.numberDiscussions}
                      />
                    </Flex>
                  ))}
                </Flex>
              ) : val === "2" ? (
                <Flex
                  sx={{
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Flex>
                    <CardVideoSymptoms
                      link="https://www.youtube.com/watch?v=WPF7Ka3tNSU"
                      video="https://www.youtube.com/embed/WPF7Ka3tNSU"
                      name="What Coronavirus Symptoms Look Like"
                      description="After being exposed to the virus that cause COVID-19, it can take as 2 to 4 days to develop."
                    />
                  </Flex>
                  <Grid columns={2} px={15}>
                    <Flex>
                      <CardImageSymptoms
                        image="/images/ferver.PNG"
                        name="Fever"
                        description="He severity of COVID-19 symptoms can range from very mild to severe"
                      />
                    </Flex>
                    <Flex>
                      <CardImageSymptoms
                        image="/images/cough.PNG"
                        name="Cough"
                        description="Such as heart or lung disease or diabetes, may be at higher risk of serious illness"
                      />
                    </Flex>
                  </Grid>
                </Flex>
              ) : (
                <Flex
                  sx={{
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Flex sx={{ width: 360 }}>
                    <CardDiagnosis
                      image="/images/Diagnosis.PNG"
                      label="Book Test Apooitment"
                      content="If you develop symptoms of coronavirus disease 2019 (C-OVID-19) and you've been exposed to the virus, contact your doctor."
                    />
                  </Flex>
                  <Text
                    color="bigStone"
                    mt={30}
                    mb="5px"
                    sx={{
                      fontSize: 15,
                      fontWeight: "heading",
                    }}
                  >
                    Give a Miss Call On
                  </Text>
                  <Button variant="phone">
                    <Flex
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PhoneIcon />
                      <Text ml={10}>028-3930-9912</Text>
                    </Flex>
                  </Button>
                </Flex>
              )}
            </Flex>
            <Flex
              sx={{
                position: close ? "fixed" : "relative",
                top: close ? 630 : 0,
                width: close ? 360 : 343,
              }}
            >
              <Footer onClick={handleClick} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default dashboard;
