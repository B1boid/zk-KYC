program dt.aleo {
	// Code auto generated from DecisionTreeClassifier using dt_to_leo_code.py 
	transition main(p1: u32, p2: u32, p3: u32, p4: u32, p5: u32) -> public u32 {
		if (p5 < 10u32) {
			if (p2 < 1u32) {
				if (p4 < 5u32) {
					return 0u32;
				} else {
					if (p4 < 160u32) {
						if (p3 < 1u32) {
							if (p1 < 1u32) {
								return 1u32;
							} else {
								if (p4 <= 94u32) {
									if (p5 < 5u32) {
										return 0u32;
									} else {
										if (p5 < 9u32) {
											return 1u32;
										} else {
											return 0u32;
										}
									}
								} else {
									return 1u32;
								}
							}
						} else {
							if (p4 <= 14u32) {
								return 0u32;
							} else {
								if (p5 < 4u32) {
									if (p4 <= 26u32) {
										return 0u32;
									} else {
										if (p4 < 71u32) {
											if (p4 <= 47u32) {
												if (p4 < 38u32) {
													return 1u32;
												} else {
													return 0u32;
												}
											} else {
												return 1u32;
											}
										} else {
											if (p4 <= 76u32) {
												return 0u32;
											} else {
												if (p5 < 3u32) {
													return 1u32;
												} else {
													return 0u32;
												}
											}
										}
									}
								} else {
									if (p4 < 144u32) {
										if (p4 < 65u32) {
											return 1u32;
										} else {
											if (p4 <= 72u32) {
												return 0u32;
											} else {
												if (p5 < 6u32) {
													return 1u32;
												} else {
													if (p5 < 7u32) {
														if (p4 < 100u32) {
															return 1u32;
														} else {
															if (p1 < 1u32) {
																return 0u32;
															} else {
																return 1u32;
															}
														}
													} else {
														if (p4 < 103u32) {
															if (p1 < 1u32) {
																if (p4 < 95u32) {
																	return 1u32;
																} else {
																	return 0u32;
																}
															} else {
																return 0u32;
															}
														} else {
															return 1u32;
														}
													}
												}
											}
										}
									} else {
										return 0u32;
									}
								}
							}
						}
					} else {
						if (p4 <= 194u32) {
							if (p4 < 184u32) {
								if (p5 < 5u32) {
									if (p4 <= 180u32) {
										if (p4 < 174u32) {
											if (p4 < 173u32) {
												if (p4 < 165u32) {
													if (p4 <= 163u32) {
														return 1u32;
													} else {
														return 0u32;
													}
												} else {
													return 1u32;
												}
											} else {
												return 0u32;
											}
										} else {
											return 1u32;
										}
									} else {
										if (p5 < 1u32) {
											return 1u32;
										} else {
											return 0u32;
										}
									}
								} else {
									if (p4 < 168u32) {
										if (p5 <= 7u32) {
											if (p3 < 1u32) {
												if (p5 < 6u32) {
													return 0u32;
												} else {
													if (p4 <= 164u32) {
														return 1u32;
													} else {
														return 0u32;
													}
												}
											} else {
												return 1u32;
											}
										} else {
											return 0u32;
										}
									} else {
										if (p4 <= 172u32) {
											return 1u32;
										} else {
											if (p1 < 1u32) {
												if (p4 <= 174u32) {
													return 1u32;
												} else {
													if (p3 < 1u32) {
														if (p5 <= 7u32) {
															return 0u32;
														} else {
															if (p4 <= 178u32) {
																return 1u32;
															} else {
																return 0u32;
															}
														}
													} else {
														if (p4 < 182u32) {
															return 1u32;
														} else {
															return 0u32;
														}
													}
												}
											} else {
												return 0u32;
											}
										}
									}
								}
							} else {
								if (p5 <= 3u32) {
									if (p4 < 191u32) {
										if (p4 <= 188u32) {
											return 0u32;
										} else {
											return 1u32;
										}
									} else {
										return 0u32;
									}
								} else {
									return 1u32;
								}
							}
						} else {
							if (p4 < 198u32) {
								return 0u32;
							} else {
								if (p4 < 199u32) {
									if (p5 < 2u32) {
										return 0u32;
									} else {
										return 1u32;
									}
								} else {
									return 0u32;
								}
							}
						}
					}
				}
			} else {
				return 0u32;
			}
		} else {
			if (p4 < 71u32) {
				if (p4 < 69u32) {
					if (p4 < 26u32) {
						if (p4 < 23u32) {
							return 0u32;
						} else {
							return 1u32;
						}
					} else {
						return 0u32;
					}
				} else {
					return 1u32;
				}
			} else {
				return 0u32;
			}
		}
	}
}