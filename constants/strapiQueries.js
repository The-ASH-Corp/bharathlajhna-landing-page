export const HOMEPAGE_QUERY = {
    populate: {
      blocks: {
        on: {
          'layout.hero-section': {
            populate: {
              heroslider: {
                populate: {
                  file: {
                    fields: ['name', 'url']
                  }
                }
              }
            }
          },
          'layout.service-section':{
            populate:{
              slider :{
                populate: {
                  file:{
                    fields: ['name', 'url']
                  }
                }
              }
            }
          },
          'layout.projects-section':{
            populate:{
              tabs :{
                populate:{
                  slider:{
                      populate:{
                        file :{
                          fields: ['name', 'url']
                        }
                      }
                  }
                }
              }
            }
          },
          'layout.testimonial-section':{
            populate:{
              testimonialcard :{
                populate:{
                      avatar :{
                        fields: ['name', 'url']
                      }
                }
              }
            }
          },
          'layout.news-section':{
            populate:{
              newstab:{
                populate:{
                  slider:{
                    populate:{
                      file :{
                        fields: ['name', 'url']
                      }
                    }
                }
                }
              }
            }
          },
          'layout.videos-section':{
            populate:{
              videos :{
                fields: ['name', 'url']
              }
            }
          }
        }
      }
    }
  }

export const ABOUT_QUERY = {
  populate:{
    teamData:{
      populate:{
        image:{
          fields: ['name', 'url']
        }
      }
    }
  }
}

export const SERVICE_QUERY = {
  populate :{
    services :{
      populate :{
        file:{
          fields: ['name', 'url']
        }
      }
    }
  }
}

export const PROJECT_QUERY = {
  populate :{
    projects :{
      populate :{
        tabs:{
          populate :{
            slider :{
              populate :{
                file:{
                  fields: ['name', 'url']
                }
              }
            }
          }
        }
      }
    }
  }
}

export const BRANCH_QUERY = {
  populate :{
    operationalHubs:{
      populate :"*"
    },
    branchTab: {
      populate: "*"
    }
  }
}

export const GALLERY_QUERY = {
  populate :{
    galleryTabs :{
      populate :{
        images :{
          populate :{
            file:{
              fields: ['name', 'url']
            }
          }
        }
      }
    }
  }
}