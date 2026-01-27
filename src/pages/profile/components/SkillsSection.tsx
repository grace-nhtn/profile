import { Card, Divider, Flex, Space, Tag, Typography, theme } from "antd"
import { useTranslation } from "react-i18next"
import type { SkillGroup } from "@/model/profile"
import { SECTION_STYLES } from "@/styles/constants"

interface SkillsSectionProps {
    items: SkillGroup[]
}

function SkillsSection({ items }: SkillsSectionProps) {
    const { t } = useTranslation()
    const { token: { colorText, colorTextSecondary, colorPrimary } } = theme.useToken()

    return (
        <section style={{ width: '100%' }}>
            <Flex vertical gap={5} style={{marginBottom: 15}}>
                <Typography.Title level={3} style={{ ...SECTION_STYLES.title, color: colorText }}>
                    {t('sections.skills.title')}
                </Typography.Title>
                <Typography.Text style={{ ...SECTION_STYLES.subtitle, color: colorTextSecondary }}>
                    {t('sections.skills.subtitle')}
                </Typography.Text>
            </Flex>

            <Card style={{ width: '100%', borderTop: `4px solid ${colorPrimary}` }}>
                <Flex vertical gap={12} style={{ width: "100%" }}>
                    {items.map((group, index) => (
                        <div key={group.label} style={{ marginBottom: 12 }}>
                            <Typography.Text strong style={{ display: 'block', marginBottom: 8 }}>
                                {group.label}
                            </Typography.Text>
                            <Space wrap size={[8, 8]}>
                                {group.items.map((skill) => (
                                    <Tag key={skill} color="blue">
                                        {skill}
                                    </Tag>
                                ))}
                            </Space>
                            {index < items.length - 1 && <Divider style={{ margin: '16px 0' }} />}
                        </div>
                    ))}
                </Flex>
            </Card>
        </section>
    )
}

export default SkillsSection
